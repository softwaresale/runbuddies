package com.github.softwaresale.runbuddies.availability

import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class AvailabilityService(
    private val availabilityRepository: AvailabilityRepository
) {
    fun getAll(): List<Availability> = availabilityRepository.findAll()
    fun getById(id: Long) = availabilityRepository.findByIdOrNull(id)
    fun save(availability: Availability) = availabilityRepository.save(availability)
    fun saveAll(availability: Collection<Availability>) = availabilityRepository.saveAll(availability)
}