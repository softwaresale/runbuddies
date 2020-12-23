package com.github.softwaresale.runbuddies.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

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