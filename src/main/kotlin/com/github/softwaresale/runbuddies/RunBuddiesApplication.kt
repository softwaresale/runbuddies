package com.github.softwaresale.runbuddies

import com.github.softwaresale.runbuddies.user.User
import com.github.softwaresale.runbuddies.user.UserService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RunBuddiesApplication

fun main(args: Array<String>) {
    val context = runApplication<RunBuddiesApplication>(*args)

    // Load Sample data
    val sampleUsers = context.getBean("mockGeneratedUsers") as List<User>
    val userService = context.getBean(UserService::class.java)
    userService.saveAll(sampleUsers)
}
