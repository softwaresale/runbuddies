package com.github.softwaresale.runbuddies.user

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : JpaRepository<User, String> {
    fun findByAuth0Id(id: String): Optional<User>
}