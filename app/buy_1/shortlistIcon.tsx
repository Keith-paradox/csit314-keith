'use client'
import React from "react";
import {Button, Tooltip} from "@nextui-org/react";

export default function ShortList() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Tooltip showArrow={true} content={isFollowed ? "Remove from shortlist":"Add to shortlist"}>
        <Button
          radius="sm"
          size="sm"
          variant="solid"
          onPress={() => setIsFollowed(!isFollowed)}
        >
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <p>{isFollowed ? <p className='bx bxs-bookmark-star text-xl'></p> : <p className='bx bx-bookmark text-xl' ></p>}</p>
        </Button>
    </Tooltip>
        
  );
}
