package com.github.softwaresale.runbuddies.user

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.github.softwaresale.runbuddies.availability.Availability
import com.github.softwaresale.runbuddies.match.Match
import javax.persistence.*

enum class Intensity(val num: Int) {
    LOW(0),
    MEDIUM(1),
    HIGH(2),
    EXTREME(3)
}

@Entity(name = "RBUser")
class User(
    var fullName: String,
    var bio: String,
    var averagePace: Double,
    var weeklyRuns: Int,
    var intensity: Intensity,

    @OneToMany(cascade = [CascadeType.ALL])
    val availability: MutableSet<Availability> = mutableSetOf(),

    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "initiator")
    @JsonBackReference("initiator")
    val initiatorMatches: MutableSet<Match> = mutableSetOf(),

    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "target")
    @JsonBackReference("target")
    val targetMatches: MutableSet<Match> = mutableSetOf(),

    @Id
    var id: String,
)
