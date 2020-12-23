package com.github.softwaresale.runbuddies.match

import com.github.softwaresale.runbuddies.user.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface MatchRepository : JpaRepository<Match, Long> {
    fun findAllByInitiator(user: User): List<Match>
    fun findAllByInitiatorId(userId: String): List<Match>
    fun findAllByInitiatorAndAccepted(user: User, accepted: Boolean): List<Match>
    fun findAllByInitiatorIdAndAccepted(userId: String, accepted: Boolean): List<Match>
    fun findAllByTarget(user: User): List<Match>
    fun findAllByTargetId(userId: String): List<Match>
    fun findAllByTargetAndAccepted(user: User, accepted: Boolean): List<Match>
    fun findAllByTargetIdAndAccepted(userId: String, accepted: Boolean): List<Match>
    fun findAllByInitiatorOrTargetAndAcceptedTrue(initiator: User, target: User = initiator): List<Match>
    fun findAllByInitiatorIdOrTargetIdAndAcceptedTrue(initiator: String, target: String = initiator): List<Match>
}