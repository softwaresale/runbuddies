package com.github.softwaresale.runbuddies.match

import com.fasterxml.jackson.annotation.JsonManagedReference
import com.github.softwaresale.runbuddies.user.User
import java.time.ZonedDateTime
import javax.persistence.*

@Entity
class Match(
    val score: Double,
    val created: ZonedDateTime = ZonedDateTime.now(),
    var accepted: Boolean = false,

    @ManyToOne(cascade = [CascadeType.ALL])
    @JsonManagedReference("initiator")
    val initiator: User,

    @ManyToOne(cascade = [CascadeType.ALL])
    @JsonManagedReference("target")
    val target: User,

    @Id @GeneratedValue
    var id: Long? = null,
)