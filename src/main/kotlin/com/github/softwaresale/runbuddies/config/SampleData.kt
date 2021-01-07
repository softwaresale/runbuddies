package com.github.softwaresale.runbuddies.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.github.softwaresale.runbuddies.user.User
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ResourceLoader

@Configuration
class SampleData(
    private val resourceLoader: ResourceLoader,
    private val objectMapper: ObjectMapper
) {
    @Bean(name = ["mockGeneratedUsers"])
    fun mockGeneratedUsers(): List<User> {
        val mockUsersFile = this.resourceLoader.getResource("classpath:static/mock_user_data.json").file
        val fileContents = mockUsersFile.readText()

        return objectMapper.readValue(mockUsersFile);
    }
}