package com.github.softwaresale.runbuddies.match

import com.github.softwaresale.runbuddies.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/v1/matches")
class MatchController(
    private val matchService: MatchService,
    private val userService: UserService,
) {

    @GetMapping
    fun getAll() = matchService.getAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long) = this.matchService.getById(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)

    @GetMapping("/initiator/{userId}")
    fun getInitiatorForUser(@PathVariable userId: String) = this.matchService.getUserCreated(userId)

    @GetMapping("/target/{userId}")
    fun getTargetForUser(@PathVariable userId: String) = this.matchService.getUserRequested(userId)

    @GetMapping("/buddies/{userId}")
    fun getBuddiesForUser(@PathVariable userId: String, @RequestParam count: Int?) = count?.let {
        matchService.getBuddies(userId).take(it)
    } ?: this.matchService.getBuddies(userId)

    @PostMapping
    fun createMatch(@RequestParam initiatorId: String, @RequestParam targetId: String): Match {
        val initiator = this.userService.getById(initiatorId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Initiator not found")
        val target = this.userService.getById(targetId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Target not found")

        return this.matchService.createMatch(initiator, target)
    }

    @PostMapping("/score")
    fun scoreUsers(@RequestParam initiatorId: String, @RequestParam targetId: String): Any {
        val initiator = this.userService.getById(initiatorId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Initiator not found")
        val target = this.userService.getById(targetId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Target not found")

        val score = this.matchService.calculateScore(initiator, target)
        return object {
            val score = score
        }
    }

    @PutMapping("/{id}/accept")
    fun acceptMatch(@PathVariable id: Long): Match {
        val match = this.matchService.getById(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        if (match.accepted)
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Request has already been accepted")

        return match.apply {
            accepted = true
        }.let {
            this.matchService.save(it)
        }
    }
}