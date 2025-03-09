import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RoutesAnimatedSet from "./RoutesAnimatedSet";
import Home from "../pages/Home";
import Test from "../test/test";
import Profile from "../pages/Profile";
import Live from "../pages/Live";

import News from "../pages/News";
import Blog from "../pages/Blog";
import LoadingScreen from "../components/LoadingScreen";

const routesList = [
  { path: "/", element: <Home /> },
  { path: "/test", element: <Test /> },
  { path: "/profile", element: <Profile /> },
  { path: "/live", element: <Live /> },
  { path: "/news", element: <News /> },
  { path: "/blog", element: <Blog /> },
];

const RoutesSetting = () => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 4000);
  });

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollFactor = 3;
      // スクロール量の制限（最小値と最大値を設定）
      const delta = Math.max(-500, Math.min(500, e.deltaY * scrollFactor)); // -500 ~ 500 の範囲で制限
      window.scrollBy({
        top: delta, // 制限された量でスクロール
        behavior: "smooth",
      });
    };

    // スクロールの無効化
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      // スクロールの有効化
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {!isloading ? (
        <Routes location={location} key={location.pathname}>
          {routesList.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<RoutesAnimatedSet>{element}</RoutesAnimatedSet>}
            />
          ))}
        </Routes>
      ) : (
        <LoadingScreen />
      )}
    </AnimatePresence>
  );
};

export default RoutesSetting;
