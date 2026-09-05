"use client"

import React, { useEffect, useMemo, useState, useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const gohighlevelIcon: SimpleIcon = {
  title: "GoHighLevel",
  slug: "gohighlevel",
  hex: "2A85FF",
  path: "M12 2L1 7.5l11 5.5 11-5.5L12 2zm-9.5 9.2L1 12l11 5.5L23 12l-1.5-.8L12 15.7l-9.5-4.5zm0 4.5L1 16.5l11 5.5 11-5.5-1.5-.7L12 20.2l-9.5-4.5z",
};

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 20,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.08, -0.08],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#0B1724"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#B8DBD9"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    const iconsList = data ? Object.values(data.simpleIcons) : [];
    
    // Inject GoHighLevel custom icon if not present
    if (!iconsList.some((i) => i.slug === "gohighlevel")) {
      iconsList.unshift(gohighlevelIcon);
    }

    return iconsList.map((icon) =>
      renderCustomIcon(icon, theme || "dark"),
    );
  }, [data, theme])

  if (!mounted) {
    return <div className="h-[300px] sm:h-[350px] w-full flex items-center justify-center" />;
  }

  return (
    <div className="w-full flex items-center justify-center [transform:translateZ(0)] [will-change:transform]">
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  )
}

export default IconCloud;
