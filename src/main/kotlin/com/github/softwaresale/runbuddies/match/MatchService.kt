package com.github.softwaresale.runbuddies.match

import kotlin.math.acos
import kotlin.math.sqrt
import kotlin.math.pow

import com.github.softwaresale.runbuddies.user.User
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class MatchService(
    private val matchRepository: MatchRepository,
) {
    private class UserInfoVector(user: User) {
        private val info: Array<Double> = arrayOf(user.averagePace, user.intensity.num.toDouble(), user.weeklyRuns.toDouble())

        fun mag(): Double {
            val summedSquares = info.map{ it.pow(2) }.sum()
            return sqrt(summedSquares)
        }

        fun dot(other: UserInfoVector): Double {
            return info.mapIndexed { index: Int, infoValue: Double -> Pair(infoValue, other.info[index]) }
                .map { valPair -> valPair.first + valPair.second }
                .sum()
        }
    }

    fun getAll(): List<Match> = matchRepository.findAll()
    fun getById(id: Long) = matchRepository.findByIdOrNull(id)
    fun getUserCreated(creator: User): List<Match> = matchRepository.findAllByInitiator(creator)
    fun getUserCreated(userId: String): List<Match> = matchRepository.findAllByInitiatorId(userId)
    fun getUserCreatedAccepted(creator: User, accepted: Boolean) = matchRepository.findAllByInitiatorAndAccepted(creator, accepted)
    fun getUserCreatedAccepted(userId: String, accepted: Boolean) = matchRepository.findAllByInitiatorIdAndAccepted(userId, accepted)
    fun getUserRequested(user: User) = matchRepository.findAllByTarget(user)
    fun getUserRequested(userId: String) = matchRepository.findAllByTargetId(userId)
    fun getUserRequested(user: User, accepted: Boolean) = matchRepository.findAllByTargetAndAccepted(user, accepted)
    fun getUserRequested(userId: String, accepted: Boolean) = matchRepository.findAllByTargetIdAndAccepted(userId, accepted)
    fun save(match: Match) = matchRepository.save(match)
    fun saveAll(matches: Collection<Match>): Collection<Match> = matchRepository.saveAll(matches)

    fun getBuddies(user: User): List<User> = matchRepository.findAllByInitiatorOrTargetAndAcceptedTrue(user)
        .map {
            if (user == it.initiator) it.target else it.initiator
        }

    fun getBuddies(userId: String): List<User> = matchRepository.findAllByInitiatorIdOrTargetIdAndAcceptedTrue(userId)
        .map {
            if (userId == it.initiator.id) it.target else it.initiator
        }

    fun calculateScore(initiator: User, requested: User): Double {
        val initiatorVec = UserInfoVector(initiator)
        val requestedVec = UserInfoVector(requested)

        // Calculate the angle between the two vectors
        val cosOfAngle = (initiatorVec.dot(requestedVec)) / (initiatorVec.mag() * requestedVec.mag());
        val angle = acos(cosOfAngle)

        /*
        Compute the radio of the angle and 180 (one semi-circle) and find the compliment. If the angle is zero, then
        the values are identical and there should be a perfect score of one.
         */
        return 1 - (angle / 180)
    }

    fun createMatch(initiator: User, requested: User): Match {
        val score = calculateScore(initiator, requested)
        val match = Match(score, initiator = initiator, target = requested)
        initiator.initiatorMatches.add(match)
        requested.targetMatches.add(match)
        return this.matchRepository.save(match)
    }
}