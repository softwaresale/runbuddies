package com.github.softwaresale.runbuddies.availability

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AvailabilityRepository : JpaRepository<Availability, Long>
