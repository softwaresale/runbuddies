package com.github.softwaresale.runbuddies.auth

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConfigurationProperties("auth0")
data class Auth0ConfigProperties @ConstructorBinding constructor(
    val audience: String,
    val issuerUri: String,
)

@ConfigurationProperties("auth0.mgmt-api")
data class Auth0MgmtAppConfigProperties @ConstructorBinding constructor(
    val clientId: String,
    val clientSecret: String,
    val audience: String,
)