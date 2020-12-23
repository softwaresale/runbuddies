package com.github.softwaresale.runbuddies.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class SecurityConfig : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity?) {
        http
            ?.authorizeRequests {
                it.antMatchers("/**").permitAll()
            }
            ?.csrf {
                it.disable()
            }
    }
}

@Configuration
class WebMvConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/api/v1/**")
            .allowedMethods("*")
            .allowedHeaders("*")
            .allowedOrigins("http://localhost:4200")
            .allowCredentials(true)
    }
}