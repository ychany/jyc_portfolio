"use client";

import { useState, useEffect } from "react";
import { db, ref, onValue } from "@/lib/dujjoncoo-firebase";

export function useDujjoncooStats() {
  const [totalCookies, setTotalCookies] = useState<number | null>(null);

  useEffect(() => {
    const totalCookiesRef = ref(db, "stats/totalCookies");

    const unsubscribe = onValue(totalCookiesRef, (snapshot) => {
      setTotalCookies(snapshot.val() || 0);
    });

    return () => unsubscribe();
  }, []);

  return { totalCookies };
}
