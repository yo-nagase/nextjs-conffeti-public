'use client';
import { Box, Button } from "@mui/material";
import { MyButton } from "../components/MyButton";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import confetti from 'canvas-confetti'
import React, { useRef, useState } from 'react';

export default function Home() {

  const randomConfetti = () => {
    console.log("xxxx")
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });
  };
  /**
   * パイナップル
   */
  const handleButton1 = () => {
    var scalar = 3;
    var pineapple = confetti.shapeFromText({ text: '🍍', scalar });
    confetti({
      particleCount: 100,
      startVelocity: 30,
      scalar: scalar,
      shapes: [pineapple, 'circle'],
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });

  };
  /**
   * 座標を指定
   */
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const handleButton2 = () => {
    let centerX: number = 0
    let centerY: number = 0
    if (buttonRef2.current) {
      const rect = buttonRef2.current!.getBoundingClientRect();
      centerX = rect.x + rect.width / 2;
      centerY = rect.y + rect.height / 2;
      console.log('Center X:', centerX, 'Center Y:', centerY);
    }
    // console.log("横幅:", windowWidth, " ", window.innerWidth)
    // console.log("エックス：", centerX, " ", Math.random())
    // console.log("ワイ", centerY)
    confetti({
      particleCount: 100,
      startVelocity: 30,
      //scalar: scalar,
      spread: 180,
      origin: {
        x: centerX / window.innerWidth,
        y: centerY / window.innerHeight
      }
    });
  };
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  const handleButton3 = () => {
    var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

    let centerX: number = 0
    let centerY: number = 0
    if (buttonRef3.current) {
      const rect = buttonRef3.current!.getBoundingClientRect();
      centerX = rect.x + rect.width / 2;
      centerY = rect.y + rect.height / 2;
      console.log('Center X:', centerX, 'Center Y:', centerY);
    }
    confetti({
      // パーティクルの数（デフォルト50)
      particleCount: 100,
      // 発射角度(デフォルト90度)
      angle: 90,
      // 発射範囲(デフォルト45度)
      spread: 60,
      // 発射速度 (default: 45)
      startVelocity: 20,
      // 失速具合 デフォルト0.9
      //decay:0.9,
      //重力 (0-1)
      gravity: 0.6,
      // default:0 数値を上げると横に流れる
      drift: 0,
      // default:false
      // confettiが動く長さ (default: 200)
      ticks: 100,
      origin: {
        x: centerX / window.innerWidth,
        y: centerY / window.innerHeight
      },
      // 紙吹雪の色を指定。配列でいくつも指定できる
      colors: ['#234343', '#ffffff', '#990000'],
      // 紙吹雪の形を指定
      shapes: ['square', 'circle', triangle],
      // 紙吹雪のサイズを指定
      scalar: 0.8,
      // z-indexを指定(default:100)
      zIndex: 100
    });
  };

  return (
    <main >
       <Stack

        //direction="row"
        spacing={5}
        justifyContent="center" // ボタンを水平方向に真ん中に寄せます
        alignItems="center" // ボタンを垂直方向に真ん中に寄せます
      >
      {/* <MyButton /> */}
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button> */}
    
      <Stack
        //direction="row"

        spacing={5}
        justifyContent="center" // ボタンを水平方向に真ん中に寄せます
        alignItems="center" // ボタンを垂直方向に真ん中に寄せます
      >
          <Box sx={{ padding: '15px' }}>
       
       場所を指定して
     
   </Box>
        <Item>
          <Button onClick={handleButton1} variant="outlined" sx={{}}>
            Outlined
          </Button>
        </Item>
        <Item>
          <Button variant="outlined" onClick={handleButton2} ref={buttonRef2}>
            小さくパーン</Button>
        </Item>
        <Item>
          <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >大きくパーン</Button>
        </Item>
        <Item>
          <Button variant="outlined" >全体にパーン</Button>
        </Item>
        <Item>
          <Button variant="outlined" onClick={randomConfetti} >ランダムにパーン</Button>
        </Item>
      </Stack>


      <Box sx={{ padding: '15px' }}>
        <h2>
全体に紙吹雪を出力        </h2>
      </Box>
      <Stack
        //direction="row"
        spacing={5}
        justifyContent="center" // ボタンを水平方向に真ん中に寄せます
        alignItems="center" // ボタンを垂直方向に真ん中に寄せます
      >
          
        <Item>
          <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >大きくパーン</Button>
        </Item>
        <Item>
          <Button variant="outlined" >全体にパーン</Button>
        </Item>
        <Item>
          <Button variant="outlined" onClick={randomConfetti} >ランダムにパーン</Button>
        </Item>
      </Stack>

      </Stack>
    </main>

  );
}
