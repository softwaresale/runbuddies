package com.github.softwaresale.runbuddies.availability

import java.time.DayOfWeek
import java.time.Duration
import java.time.OffsetTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Availability(
    val day: DayOfWeek,
    val startTime: OffsetTime,
    val duration: Duration? = Duration.ofHours(1),
    @Id @GeneratedValue
    var id: Long? = null,
) {
    val endTime: OffsetTime
        get() = this.startTime.plus(duration)
}