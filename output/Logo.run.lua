Logo=Logo or '0104',VT=Logo:sub(3,4)+0,local VV=Logo:sub(1,2)+0
if SR==0 then
Tx1=string.char(0x00,0x03,0x00,0x03,0x7F,0x03,0x60,0x7F,0xE0,0x61,0xB6,0x31,0xFC,0x06,
0x78,0x06,0x18,0x06,0x3C,0x0F,0x6C,0x0F,0xE6,0x19,0x83,0x19,0xC0,0x30,0x60,0x60,0x30,0xC0)
Tx2=string.char(0x00,0x00,0x0C,0x03,0xD8,0x7D,0xD8,0x6C,0xC0,0x6C,0xC0,0x6C,0xDF,0x6C,
0xD8,0x6C,0xD8,0x6C,0xD8,0x7F,0xD8,0x3D,0xD8,0x0C,0x18,0x0C,0x3C,0x0C,0xE6,0xFF,0x00,0x00)
Tx3=string.char(0x18,0x06,0x18,0x06,0xF8,0xFF,0x0C,0x06,0x0C,0x06,0xEE,0x7F,0x6E,0x66,
0x6F,0x66,0xEC,0x7F,0x0C,0x06,0xCC,0x06,0x8C,0x07,0x0C,0x03,0x8C,0x07,0xCC,0x1C,0x7C,0xF0)
Tx4=string.char(0x00,0x00,0xFC,0x3F,0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x8C,0x31,
0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x8C,0x31,0x8C,0x31,0x8C,0x31,0x86,0x31,0x86,0x3D,0x03,0x18)
else
Tx4=string.char(0x03,0x0C,0x06,0x06,0x0C,0x03,0x98,0xC1,0x98,0x67,0xF0,0x36,0xF0,0x3C,
0x60,0x18,0x60,0x1E,0x60,0x3F,0x8C,0x6D,0x86,0x07,0xFE,0x06,0xC0,0xFE,0xC0,0x00,0xC0,0x00)
Tx3=string.char(0x00,0x00,0xFF,0x67,0x30,0x3C,0x30,0x18,0x30,0x1B,0xBC,0x1B,0xFE,0x1B,
0x36,0x1B,0x36,0x1B,0x36,0xFB,0x36,0x03,0x36,0x03,0x36,0x1B,0xBE,0x1B,0xC0,0x30,0x00,0x00)
Tx2=string.char(0x0F,0x3E,0x38,0x33,0xE0,0x31,0xC0,0x30,0xE0,0x31,0x60,0x33,0x60,0x30,
0xFE,0x37,0x66,0xF6,0x66,0x76,0xFE,0x77,0x60,0x30,0x60,0x30,0xFF,0x1F,0x60,0x18,0x60,0x18)
Tx1=string.char(0x18,0xC0,0xBC,0x61,0x8C,0x61,0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,
0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x00,0x00)
end
function ShowLogo(disp) disp:clearBuffer()
disp:drawXBM(11,(SR==0 and 25 or 30),16,16,Tx1)
disp:drawXBM(41,(SR==0 and 25 or 30),16,16,Tx2)
disp:drawXBM(71,(SR==0 and 25 or 30),16,16,Tx3)
disp:drawXBM(101,(SR==0 and 25 or 30),16,16,Tx4)
if VV==1 then disp:drawStr((SR==0 and 80 or 50),(SR==0 and 63 or 5),'Ver:'..Ver:match('-(.+)')) end
disp:sendBuffer(),end
