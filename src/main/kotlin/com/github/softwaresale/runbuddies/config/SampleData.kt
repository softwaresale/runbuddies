package com.github.softwaresale.runbuddies.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.github.softwaresale.runbuddies.user.User
import com.github.softwaresale.runbuddies.user.UserService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ResourceLoader

@Configuration
class SampleData(
    private val resourceLoader: ResourceLoader,
    private val objectMapper: ObjectMapper
) {
    @Bean
    fun sampleUsers(): List<User> {
        val sampleUsersFile = this.resourceLoader.getResource("classpath:static/sample-users.json").file
        return objectMapper.readValue(sampleUsersFile, List::class.java) as List<User>
    }
}