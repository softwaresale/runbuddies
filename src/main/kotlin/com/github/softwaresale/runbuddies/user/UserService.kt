package com.github.softwaresale.runbuddies.user

import com.github.softwaresale.runbuddies.availability.Availability
import com.github.softwaresale.runbuddies.availability.AvailabilityService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val availabilityService: AvailabilityService,
) {
    fun getAll(): List<User> = userRepository.findAll()
    fun getById(id: String): User? = userRepository.findByIdOrNull(id)
    fun save(user: User) = userRepository.save(user)
    fun saveAll(users: Collection<User>): Collection<User> = userRepository.saveAll(users)

    /**
     * Adds availability to an existing user
     */
    fun addAvailability(id: String, newAvailability: Availability): User? {
        return this.getById(id)?.apply {
            val savedAvailability = availabilityService.save(newAvailability)
            availability.add(savedAvailability)
        }?.let {
            this.userRepository.save(it)
        }
    }

    fun addAvailability(id: String, availabilityCollection: Collection<Availability>): User? = this.getById(id)?.apply {
        val savedAvailability = availabilityService.saveAll(availabilityCollection)
        availability.addAll(savedAvailability)
    }?.let {
        this.userRepository.save(it)
    }
}