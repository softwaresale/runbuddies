package com.github.softwaresale.runbuddies.user

import com.github.softwaresale.runbuddies.availability.Availability
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/v1/users")
class UserController(
    private val userService: UserService
) {

    @GetMapping
    fun getAll() = this.userService.getAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id: String) = this.userService.getById(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)

    @GetMapping("/me")
    fun getCurrentUser() = this.userService.getById("TODO") ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)

    @PostMapping
    fun createUser(@RequestBody user: User) = this.userService.save(user)

    @PostMapping("/batch")
    fun createUsers(@RequestBody users: Collection<User>) = this.userService.saveAll(users)

    @PostMapping("/{id}/availability")
    fun addAvailability(@PathVariable id: String, @RequestBody availability: List<Availability>) = this.userService.addAvailability(id, availability)
}