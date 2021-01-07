package com.github.softwaresale.runbuddies.auth

import com.auth0.client.auth.AuthAPI
import com.auth0.client.mgmt.ManagementAPI
import com.auth0.exception.Auth0Exception
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator
import org.springframework.security.oauth2.core.OAuth2TokenValidator
import org.springframework.security.oauth2.jwt.*

@Configuration
@EnableConfigurationProperties(Auth0ConfigProperties::class, Auth0MgmtAppConfigProperties::class)
class Auth0Configuration(
    private val properties: Auth0ConfigProperties,
    private val mgmtAppConfigProperties: Auth0MgmtAppConfigProperties
) {

    @Bean
    fun authAPI(): AuthAPI {
        return AuthAPI(properties.issuerUri, mgmtAppConfigProperties.clientId, mgmtAppConfigProperties.clientSecret)
    }

    @Bean
    fun managementAPI(authAPI: AuthAPI): ManagementAPI {
        val request = authAPI.requestToken(mgmtAppConfigProperties.audience)
        val holder = request.execute()
        return ManagementAPI(properties.issuerUri, holder.accessToken)
    }

    @Bean
    fun jwtDecoder(): JwtDecoder {
        val decoder = JwtDecoders.fromOidcIssuerLocation(properties.issuerUri) as NimbusJwtDecoder

        val audienceValidator = AudienceValidator(properties.audience) as OAuth2TokenValidator<Jwt>
        val withIssuer: OAuth2TokenValidator<Jwt> = JwtValidators.createDefaultWithIssuer(properties.issuerUri)
        val withAudience: OAuth2TokenValidator<Jwt> = DelegatingOAuth2TokenValidator(withIssuer, audienceValidator)

        decoder.setJwtValidator(withAudience)

        return decoder
    }
}