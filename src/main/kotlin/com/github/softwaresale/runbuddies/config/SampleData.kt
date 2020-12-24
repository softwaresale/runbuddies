package com.github.softwaresale.runbuddies.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
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
    // @Bean(name = ["sampleUsers"])
    fun sampleUsers(): List<User> {
        val sampleUsersFile = this.resourceLoader.getResource("classpath:static/sample-users.json").file
        return objectMapper.readValue(sampleUsersFile)
    }

    @Bean(name = ["mockGeneratedUsers"])
    fun mockGeneratedUsers(): List<User> {
        val mockUsersFile = this.resourceLoader.getResource("classpath:static/mock_user_data.json").file
        return objectMapper.readValue(mockUsersFile)
    }
}