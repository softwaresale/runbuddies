package com.github.softwaresale.runbuddies

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RunBuddiesApplication

fun main(args: Array<String>) {
    runApplication<RunBuddiesApplication>(*args)
}
