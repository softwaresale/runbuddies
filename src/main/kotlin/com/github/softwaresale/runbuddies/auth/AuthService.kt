package com.github.softwaresale.runbuddies.auth

import com.auth0.client.auth.AuthAPI
import com.auth0.client.mgmt.ManagementAPI
import com.auth0.client.mgmt.filter.UserFilter
import com.auth0.json.auth.UserInfo
import com.auth0.json.mgmt.users.User
import org.springframework.stereotype.Service

@Service
class AuthService(
    private val authAPI: AuthAPI,
    private val managementAPI: ManagementAPI,
) {
    fun getUserInfo(userId: String): User {
        return this.managementAPI.users()[userId, UserFilter()].execute()
    }
}