package com.github.softwaresale.runbuddies.user

import kotlin.math.floor
import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.github.softwaresale.runbuddies.availability.Availability
import com.github.softwaresale.runbuddies.match.Match
import javax.persistence.*

enum class Intensity(val num: Int) {
    LOW(0),
    MEDIUM(1),
    HIGH(2),
    EXTREME(3)
}

data class UserDTO(
    val firstName: String,
    val lastName: String,
    val bio: String,
    val averagePace: Double,
    val weeklyRuns: Int,
    val intensity: Intensity,
    val availability: MutableSet<Availability>,
    val id: String,
    val profilePic: String?,
)

@Entity(name = "RBUser")
class User(
    var fullName: String,
    var bio: String,
    var averagePace: Double,
    var weeklyRuns: Int,
    var intensity: Intensity,
    @Column(unique = true)
    // @get:JsonIgnore
    var auth0Id: String,
    var profilePic: String = "https://thispersondoesnotexist.com/image",

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
) {

    val paceStr: String
        get() {
            val decimal = this.averagePace - floor(this.averagePace)
            val minutes = floor(this.averagePace).toInt()
            val seconds = (decimal * 60).toInt()

            return "$minutes:$seconds"
        }
}
