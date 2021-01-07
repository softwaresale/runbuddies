package com.github.softwaresale.runbuddies.user

import com.github.softwaresale.runbuddies.auth.AuthService
import com.github.softwaresale.runbuddies.availability.Availability
import org.springframework.http.HttpStatus
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/v1/users")
class UserController(
    private val userService: UserService,
    private val authService: AuthService
) {

    private fun getUserIdFromContext(): String {
        val authentication = SecurityContextHolder.getContext().authentication as JwtAuthenticationToken
        val principal = authentication.principal as Jwt
        return principal.claims["sub"] as String
    }

    @GetMapping
    fun getAll() = this.userService.getAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id: String) = this.userService.getById(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)

    @GetMapping("/me")
    fun getCurrentUser(): User {
        val id = getUserIdFromContext()
        return this.userService.getByAuth0Id(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "No local user has been associated with this auth0 id")
    }

    @PostMapping
    fun createUser(@RequestBody user: User) = this.userService.save(user)

    @PostMapping("/signup")
    fun createUser(@RequestBody dto: UserDTO): User {
        val auth0Id = getUserIdFromContext()
        return userService.getByAuth0Id(auth0Id) ?: userService.createUserFromDTO(dto, auth0Id)
    }

    @PostMapping("/batch")
    fun createUsers(@RequestBody users: Collection<User>) = this.userService.saveAll(users)

    @PostMapping("/{id}/availability")
    fun addAvailability(@PathVariable id: String, @RequestBody availability: List<Availability>) = this.userService.addAvailability(id, availability)
}