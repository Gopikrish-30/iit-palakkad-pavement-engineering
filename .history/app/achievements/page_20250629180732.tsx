"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Jury Appreciation Prize",
      description:
        "Ms. Silpa Sekhar G., a research scholar under the guidance of Dr. C.V Veena Venudharan, Department of Civil Engineering, has been awarded the 'Jury Appreciation Prize' for presenting research at the All India Research Scholars' Summit 2025, held from 27th to 30th March, 2025, at the Indian Institute of Technology Madras.",
      year: "2025",
      category: "Research Recognition",
      icon: Award,
      imageSrc: "/Profile Photos/Silpa.jpg",
      imageAlt: "Ms. Silpa Sekhar G.",
      extraDetails: [
        "Research Scholar",
        "Under the guidance of Dr. C.V Veena Venudharan",
        "Department of Civil Engineering",
      ],
    },
  ]

  const handleAchievementClick = (achievement: any) => {
    // Navigate to detailed achievement page
    window.location.href = `/achievements/${achievement.title.toLowerCase().replace(/\s+/g, "-")}`
  }

  const handleViewCertificate = (achievement: any) => {
    // Open certificate or award document
    window.open(`/certificates/${achievement.title.toLowerCase().replace(/\s+/g, "-")}.pdf`, "_blank")
  }

  const handleShareAchievement = async (achievement: any) => {
    const shareData = {
        </div>
      </section>
    </div>
  )
}
