import StarIcon from "@/assets/icons/star.svg"
import { useThemeColor } from "@/hooks/useThemeColor"
import React from 'react'

export default function Start({size}) {
  const colors = useThemeColor()
  return (
    <>
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
    </>
  )
}