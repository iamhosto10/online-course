import GlobalApi from "@/app/_utils/GlobalApi";
import { IBanner } from "@/Interfaces/banner";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanner() {
  const [bannerList, setBannerList] = useState<IBanner[] | []>([]);

  useEffect(() => {
    getAllBanner();
  }, []);

  const getAllBanner = async () => {
    try {
      const sideBarList = await GlobalApi.GetSideBar();
      console.log(sideBarList?.sideBanners);
      setBannerList(sideBarList?.sideBanners as IBanner[]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {bannerList.map((item, index) => (
        <div key={index}>
          <Image
            src={item.banner.url}
            alt={item.name}
            height={500}
            width={300}
            className="rounded-xl cursor-pointer"
            onClick={() => window.open(item.url)}
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanner;
