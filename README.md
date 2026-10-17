# Student CRUD (Next.js + Prisma + SQLite)

ระบบจัดการข้อมูลนักศึกษาตามบทเรียน [NextJS CRUD](https://it-nkc.github.io/nextjs-crud/) มีรายการนักศึกษา เพิ่ม แก้ไข และลบข้อมูล

## ความต้องการ

- Node.js 20.19 ขึ้นไป
- npm

## ติดตั้งและเริ่มใช้งาน

เปิด Terminal ในโฟลเดอร์ `my-app` แล้วติดตั้ง dependencies:

```bash
npm install
```

สร้างไฟล์ตั้งค่าฐานข้อมูลจากตัวอย่าง:

```bash
cp .env.example .env
```

บน Windows PowerShell ใช้:

```powershell
Copy-Item .env.example .env
```

สร้างฐานข้อมูล SQLite และ Prisma Client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

เริ่มเซิร์ฟเวอร์:

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ระบบจะไปยัง `/students`

## วิธีใช้งาน

- ดูรายชื่อนักศึกษาที่ `/students`
- เลือก **เพิ่มนักศึกษา** เพื่อสร้างรายการใหม่
- เลือก **แก้ไข** เพื่อปรับข้อมูลนักศึกษา
- เลือก **ลบ** และยืนยันเพื่อลบรายการ

ข้อมูลนักศึกษาประกอบด้วยรหัสนักศึกษา ชื่อ อีเมล (ไม่บังคับ) สาขา ชั้นปี และสถานะ

## ตรวจสอบโปรเจกต์

```bash
npm run lint
npm run build
```

## ส่งขึ้น GitHub

โปรเจกต์นี้เป็น repository แยกอยู่ในโฟลเดอร์ `my-app` สร้าง repository เปล่าบน GitHub แล้วตั้ง remote ของตัวเอง (แทน `YOUR-USERNAME`):

```bash
git remote add origin https://github.com/YOUR-USERNAME/nextjs-crud.git
git add .
git commit -m "Complete Next.js student CRUD"
git push -u origin HEAD
```

ไฟล์ `.env` และฐานข้อมูล SQLite ถูกละเว้นจาก Git อย่าอัปโหลด secret หรือข้อมูลส่วนตัวขึ้น repository
