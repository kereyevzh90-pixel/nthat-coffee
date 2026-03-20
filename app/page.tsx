"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Coffee,
  Leaf,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  ChefHat,
  Flame,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";
import { UtensilsCrossed, Info, Images, PhoneCall } from "lucide-react";
import { MenuModal, SubMenuItem } from "@/components/ui/menu-modal";
import { Lightbox } from "@/components/ui/lightbox";
import { cn } from "@/lib/utils";

// ─── MENU DATA ────────────────────────────────────────────────────────────────
type MenuBentoItem = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  price: string;
  imgSrc: string;
  className: string;
  subItems: SubMenuItem[];
};

// 6-item bento layout: tall-short-tall / wide+short / tall
const SIX_ITEM_CLASSES = [
  "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-5",
  "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-5",
];

// 4-item bento layout: tall-left / wide-top / two-bottom
const FOUR_ITEM_CLASSES = [
  "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
];

const menuBentoData: Record<"coffee" | "tea" | "drinks" | "cakes", MenuBentoItem[]> = {
  coffee: [
    {
      Icon: Coffee, name: "Classic", description: "Эспрессо, Американо, Латте, Капучино, Флэт Уайт", price: "от 950 ₸",
      imgSrc: "/photo_39_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[0],
      subItems: [
        { name: "Эспрессо", price: "950 ₸", description: "30 / 60 мл", imgSrc: "/photo_37_2026-03-19_21-41-52.jpg" },
        { name: "Американо", price: "950 ₸", description: "150 / 250 мл", imgSrc: "/photo_38_2026-03-19_21-41-52.jpg" },
        { name: "Латте", price: "1300 / 1500 ₸", description: "300 / 450 мл", imgSrc: "/photo_39_2026-03-19_21-41-52.jpg" },
        { name: "Айс Латте", price: "1600 / 1700 ₸", description: "300 / 450 мл", imgSrc: "/photo_41_2026-03-19_21-41-52.jpg" },
        { name: "Капучино", price: "1300 / 1500 ₸", description: "300 / 450 мл", imgSrc: "/photo_39_2026-03-19_21-41-52.jpg" },
        { name: "Флэт Уайт", price: "1100 ₸", description: "180 мл", imgSrc: "/photo_40_2026-03-19_21-41-52.jpg" },
        { name: "+ Растительное молоко (сүт/кокос/бадам)", price: "+800 ₸", description: "для любого классического напитка" },
        { name: "+ Сироп 20 мл", price: "+250 ₸", description: "" },
      ],
    },
    {
      Icon: Sparkles, name: "Special", description: "Рафы и авторские латте", price: "от 1600 ₸",
      imgSrc: "/photo_1_2026-03-19_21-40-39.jpg", className: SIX_ITEM_CLASSES[1],
      subItems: [
        { name: "Раф Классик", price: "1600 / 1800 ₸", description: "300 / 450 мл", imgSrc: "/photo_1_2026-03-19_21-40-39.jpg" },
        { name: "Раф Урбечпен", price: "1600 / 1800 ₸", description: "300 / 450 мл", imgSrc: "/photo_2_2026-03-19_21-40-39.jpg" },
        { name: "Раф Түзды Попкорн", price: "1600 / 1800 ₸", description: "300 / 450 мл", imgSrc: "/photo_4_2026-03-19_21-40-39.jpg" },
        { name: "Латте Лимонды Пай", price: "1700 ₸", description: "300 мл", imgSrc: "/photo_5_2026-03-19_21-40-39.jpg" },
        { name: "Латте Бонпари", price: "1700 ₸", description: "300 мл" },
        { name: "Латте Эрл Грей", price: "1700 ₸", description: "300 мл" },
        { name: "Латте Lotus", price: "1700 ₸", description: "300 мл" },
      ],
    },
    {
      Icon: Leaf, name: "Beverages", description: "Матча, какао и фирменные напитки", price: "от 1500 ₸",
      imgSrc: "/photo_29_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[2],
      subItems: [
        { name: "Латте Матча", price: "1500 ₸", description: "300 мл", imgSrc: "/photo_29_2026-03-19_21-41-52.jpg" },
        { name: "Какао Маршмеллоумен", price: "1500 ₸", description: "300 мл", imgSrc: "/photo_30_2026-03-19_21-41-52.jpg" },
        { name: "Матча Тропикалық", price: "1500 ₸", description: "300 мл", imgSrc: "/photo_29_2026-03-19_21-41-52.jpg" },
        { name: "Бамбл Матча", price: "1500 ₸", description: "350 мл", imgSrc: "/photo_29_2026-03-19_21-41-52.jpg" },
      ],
    },
    {
      Icon: Flame, name: "Sau Bolsh", description: "Фирменный имбирный шот — заряд энергии", price: "900 ₸",
      imgSrc: "/photo_37_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[3],
      subItems: [
        { name: "Sau Bolsh", price: "900 ₸", description: "30 мл • имбирь, лимон, мёд" },
      ],
    },
    {
      Icon: ChefHat, name: "Alternative", description: "Жидекті Батч, V60, Origami, Chemex", price: "от 1000 ₸",
      imgSrc: "/photo_34_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[4],
      subItems: [
        { name: "Sau Bolsh", price: "900 ₸", description: "30 мл", imgSrc: "/photo_37_2026-03-19_21-41-52.jpg" },
        { name: "Жидекті Батч", price: "1600 ₸", description: "180 мл" },
        { name: "Батч Брю", price: "1000 ₸", description: "200 мл", imgSrc: "/photo_33_2026-03-19_21-41-52.jpg" },
        { name: "V60", price: "1600 ₸", description: "250 мл", imgSrc: "/photo_34_2026-03-19_21-41-52.jpg" },
        { name: "Origami", price: "1600 ₸", description: "250 мл", imgSrc: "/photo_36_2026-03-19_21-41-52.jpg" },
        { name: "Chemex", price: "2200 ₸", description: "550 мл", imgSrc: "/photo_35_2026-03-19_21-41-52.jpg" },
        { name: "* Сирек және эксклюзивті сорттар", price: "+1000 ₸", description: "" },
        { name: "— ҚОС.СУСЫНДАР —", price: "", description: "" },
        { name: "Су", price: "500 ₸", description: "газбен / газсыз" },
        { name: "Matcha Elixir", price: "2100 ₸", description: "ассортиментте" },
        { name: "МЁДА", price: "2000 ₸", description: "ассортиментте" },
        { name: "DrinkSome", price: "2000 ₸", description: "алкогольсіз сусын" },
      ],
    },
    {
      Icon: Star, name: "Доп. напитки", description: "Вода, Matcha Elixir, МЁДА, DrinkSome", price: "от 500 ₸",
      imgSrc: "/photo_32_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[5],
      subItems: [
        { name: "Вода", price: "500 ₸", description: "С газом / без газа" },
        { name: "Matcha Elixir", price: "2100 ₸", description: "В ассортименте" },
        { name: "МЁДА", price: "2000 ₸", description: "В ассортименте" },
        { name: "DrinkSome", price: "2000 ₸", description: "Безалкогольный напиток" },
      ],
    },
  ],
  tea: [
    {
      Icon: Flame, name: "Адани шайы", description: "Фирменный адани чай — визитная карточка nThat", price: "1300 ₸",
      imgSrc: "/photo_30_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[0],
      subItems: [
        { name: "Адани шайы", price: "1300 ₸", description: "Фирменный рецепт" },
      ],
    },
    {
      Icon: Leaf, name: "Tea", description: "Ассам, Сенча, Пуэр, Эрл Грей, Молочный Улун", price: "1000 ₸",
      imgSrc: "/photo_31_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[1],
      subItems: [
        { name: "Ассам", price: "1000 ₸", description: "350 мл" },
        { name: "Сенча", price: "1000 ₸", description: "350 мл" },
        { name: "Пуэр", price: "1000 ₸", description: "350 мл" },
        { name: "Эрл Грей", price: "1000 ₸", description: "350 мл" },
        { name: "Молочный Улун", price: "1000 ₸", description: "350 мл" },
      ],
    },
    {
      Icon: Sparkles, name: "Special Tea", description: "Облепиха, Малина-имбирь, Марокканский, Арабский, Глинтвейн", price: "1300 ₸",
      imgSrc: "/photo_10_2026-03-19_21-40-39.jpg", className: FOUR_ITEM_CLASSES[2],
      subItems: [
        { name: "Облепиха-цитрус", price: "1300 ₸", description: "450 мл" },
        { name: "Малина-имбирь", price: "1300 ₸", description: "450 мл" },
        { name: "Марокканский шай", price: "1300 ₸", description: "450 мл" },
        { name: "Арабский шай", price: "1300 ₸", description: "450 мл" },
        { name: "Вишнёвый глинтвейн", price: "1300 ₸", description: "450 мл" },
      ],
    },
    {
      Icon: Star, name: "Милкшейктер", description: "Айс Урбеч, Ванильный, Клубничный, Шоколадный", price: "от 1800 ₸",
      imgSrc: "/photo_25_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[3],
      subItems: [
        { name: "Айс Урбеч", price: "2100 ₸", description: "450 мл" },
        { name: "Ванильный", price: "1800 ₸", description: "450 мл" },
        { name: "Клубничный", price: "1800 ₸", description: "450 мл" },
        { name: "Шоколадный", price: "1800 ₸", description: "450 мл" },
      ],
    },
  ],
  drinks: [
    {
      Icon: Sparkles, name: "Tonic", description: "Классик, Кола, Анар, Таңқурай, Матча", price: "1500 ₸",
      imgSrc: "/photo_8_2026-03-19_21-40-39.jpg", className: SIX_ITEM_CLASSES[0],
      subItems: [
        { name: "Классик", price: "1500 ₸", description: "450 мл" },
        { name: "Кола", price: "1500 ₸", description: "450 мл" },
        { name: "Анар", price: "1500 ₸", description: "450 мл" },
        { name: "Таңқурай", price: "1500 ₸", description: "450 мл" },
        { name: "Матча", price: "1500 ₸", description: "450 мл" },
      ],
    },
    {
      Icon: Leaf, name: "Fresh & Lemonades", description: "Свежевыжатые соки и авторские лимонады", price: "от 1200 ₸",
      imgSrc: "/photo_6_2026-03-19_21-40-39.jpg", className: SIX_ITEM_CLASSES[1],
      subItems: [
        { name: "Апельсинді", price: "2000 ₸", description: "300 мл", imgSrc: "/photo_6_2026-03-19_21-40-39.jpg" },
        { name: "Бамбл", price: "2500 ₸", description: "450 мл", imgSrc: "/photo_7_2026-03-19_21-40-39.jpg" },
        { name: "Hot Бамбл", price: "2500 ₸", description: "450 мл", imgSrc: "/photo_7_2026-03-19_21-40-39.jpg" },
        { name: "Ice Lemon Rock", price: "1200 ₸", description: "300 мл", imgSrc: "/photo_9_2026-03-19_21-40-39.jpg" },
        { name: "Тропикалық", price: "1500 ₸", description: "450 мл", imgSrc: "/photo_22_2026-03-19_21-41-52.jpg" },
        { name: "Анар-Юдзу", price: "1500 ₸", description: "450 мл", imgSrc: "/photo_10_2026-03-19_21-40-39.jpg" },
        { name: "Жидекті", price: "1500 ₸", description: "450 мл" },
        { name: "Цитрус-Таңқурай", price: "1500 ₸", description: "450 мл", imgSrc: "/photo_8_2026-03-19_21-40-39.jpg" },
      ],
    },
    {
      Icon: Leaf, name: "Mojito", description: "Mojito Classic, Mojito Cherry", price: "1500 ₸",
      imgSrc: "/photo_23_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[2],
      subItems: [
        { name: "Mojito Classic", price: "1500 ₸", description: "освежающий напиток на основе лайма, свежей мяты, содовой и льда", imgSrc: "/photo_23_2026-03-19_21-41-52.jpg" },
        { name: "Mojito Cherry", price: "1500 ₸", description: "вишнёвый мохито с мятой, лаймом и содовой — яркий, свежий и без кофе", imgSrc: "/photo_24_2026-03-19_21-41-52.jpg" },
      ],
    },
    {
      Icon: Star, name: "Смузи", description: "Құрмалы, Жидек шиесі, Алма-селдерей", price: "1600 ₸",
      imgSrc: "/photo_27_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[3],
      subItems: [
        { name: "Құрмалы", price: "1600 ₸", description: "300 мл" },
        { name: "Жидек шиесі", price: "1600 ₸", description: "300 мл" },
        { name: "Алма-селдерей", price: "1600 ₸", description: "300 мл" },
        { name: "Muscle Up", price: "1600 ₸", description: "350 мл • протеиндік сусын" },
      ],
    },
    {
      Icon: Sparkles, name: "Milkshakes", description: "Ice Urbech, Frappuccino, Muscle Up, ванильный, клубничный, шоколадный, баблгам", price: "от 1600 ₸",
      imgSrc: "/photo_26_2026-03-19_21-41-52.jpg", className: SIX_ITEM_CLASSES[4],
      subItems: [
        { name: "Ice Urbech", price: "2100 ₸", description: "эспрессо с мороженым, арахисовым урбечем и молоком", imgSrc: "/photo_25_2026-03-19_21-41-52.jpg" },
        { name: "Frappuccino", price: "1800 ₸", description: "эспрессо, молоко и лёд — взбитый до нежной текстуры", imgSrc: "/photo_26_2026-03-19_21-41-52.jpg" },
        { name: "Muscle Up", price: "1600 ₸", description: "протеиновый напиток с высоким содержанием белков", imgSrc: "/photo_27_2026-03-19_21-41-52.jpg" },
        { name: "Milkshake Ванильный", price: "1600 ₸", description: "450 мл", imgSrc: "/photo_28_2026-03-19_21-41-52.jpg" },
        { name: "Milkshake Клубничный", price: "1600 ₸", description: "450 мл", imgSrc: "/photo_28_2026-03-19_21-41-52.jpg" },
        { name: "Milkshake Шоколадный", price: "1600 ₸", description: "450 мл", imgSrc: "/photo_28_2026-03-19_21-41-52.jpg" },
        { name: "Milkshake Баблгам", price: "1600 ₸", description: "450 мл", imgSrc: "/photo_28_2026-03-19_21-41-52.jpg" },
      ],
    },
  ],
  cakes: [
    {
      Icon: Sparkles, name: "Lotus Cheesecake", description: "Нежный десерт с карамельно-пряным вкусом печенья LOTUS", price: "по запросу",
      imgSrc: "/photo_5_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[0],
      subItems: [
        { name: "Lotus Cheesecake", price: "по запросу", description: "Карамельно-пряный вкус, нежная текстура", imgSrc: "/photo_5_2026-03-19_21-41-52.jpg" },
      ],
    },
    {
      Icon: Star, name: "Canelé", description: "Французская выпечка с хрустящей корочкой и ванильной сердцевиной", price: "по запросу",
      imgSrc: "/photo_8_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[1],
      subItems: [
        { name: "Canelé", price: "по запросу", description: "Хрустящая карамельная корочка, нежная ванильная сердцевина", imgSrc: "/photo_8_2026-03-19_21-41-52.jpg" },
        { name: "Pastel de Nata", price: "по запросу", description: "Португальский заварной тарт", imgSrc: "/photo_6_2026-03-19_21-41-52.jpg" },
      ],
    },
    {
      Icon: Flame, name: "Tarte", description: "Нежная песочная основа с начинкой, в которую невозможно не влюбиться", price: "по запросу",
      imgSrc: "/photo_7_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[2],
      subItems: [
        { name: "Tarte Баноффи", price: "по запросу", description: "Песочная основа, банан, карамель, крем", imgSrc: "/photo_7_2026-03-19_21-41-52.jpg" },
        { name: "Tarte Ягодный", price: "по запросу", description: "Песочная основа, заварной крем, свежие ягоды", imgSrc: "/photo_7_2026-03-19_21-41-52.jpg" },
      ],
    },
    {
      Icon: ChefHat, name: "Pastel de Nata", description: "Португальский заварной тарт — хрустящее тесто и кремовая начинка", price: "по запросу",
      imgSrc: "/photo_6_2026-03-19_21-41-52.jpg", className: FOUR_ITEM_CLASSES[3],
      subItems: [
        { name: "Pastel de Nata", price: "по запросу", description: "Только в кофейне nThat", imgSrc: "/photo_6_2026-03-19_21-41-52.jpg" },
      ],
    },
  ],
};

// ─── BENTO FEATURES ───────────────────────────────────────────────────────────
const bentoFeatures = [
  {
    Icon: Coffee,
    name: "Specialty зёрна",
    description:
      "Работаем напрямую с фермерами Эфиопии, Колумбии и Бразилии. Только свежая обжарка.",
    href: "#menu",
    cta: "Смотреть меню",
    background: (
      <Image
        src="/photo_35_2026-03-19_21-41-52.jpg"
        alt="Chemex specialty coffee"
        fill
        className="absolute inset-0 object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ChefHat,
    name: "Мастера бариста",
    description:
      "Наши бариста прошли обучение в ведущих specialty-школах Европы и Азии.",
    href: "#about",
    cta: "О нас",
    background: (
      <Image
        src="/photo_42_2026-03-19_21-41-52.jpg"
        alt="Baristas nThat"
        fill
        className="absolute inset-0 object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Leaf,
    name: "Уютная атмосфера",
    description: "Тихое место в центре города — идеально для работы и отдыха.",
    href: "#gallery",
    cta: "Атмосфера",
    background: (
      <Image
        src="/photo_2_2026-03-19_21-40-39.jpg"
        alt="Raf Urbech nThat"
        fill
        className="absolute inset-0 object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Sparkles,
    name: "Авторская выпечка",
    description: "Всё готовится каждое утро — круассаны, чизкейки, сырники.",
    href: "#menu",
    cta: "Смотреть меню",
    background: (
      <Image
        src="/photo_5_2026-03-19_21-41-52.jpg"
        alt="Lotus Cheesecake"
        fill
        className="absolute inset-0 object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Flame,
    name: "Собственная обжарка",
    description:
      "Обжариваем зёрна сами — каждую неделю свежая партия в нашей мастерской.",
    href: "#about",
    cta: "Подробнее",
    background: (
      <Image
        src="/photo_36_2026-03-19_21-41-52.jpg"
        alt="BR'EQ brewing"
        fill
        className="absolute inset-0 object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];


// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState<"coffee" | "tea" | "drinks" | "cakes">(
    "coffee",
  );
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [modal, setModal] = useState<{ title: string; items: SubMenuItem[]; imgSrc: string } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "/photo_42_2026-03-19_21-41-52.jpg", alt: "Команда nThat" },
    { src: "/photo_45_2026-03-19_21-41-52.jpg", alt: "Атмосфера" },
    { src: "/photo_25_2026-03-19_21-41-52.jpg", alt: "Ice Urbech" },
    { src: "/photo_33_2026-03-19_21-41-52.jpg", alt: "Batch Brew" },
    { src: "/photo_29_2026-03-19_21-41-52.jpg", alt: "Matcha" },
  ];

  const mobileNavItems: NavItem[] = [
    { id: "menu",    icon: <UtensilsCrossed />, label: "Меню",     onClick: () => { setMobileOpen(false); document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "about",   icon: <Info />,            label: "О нас",    onClick: () => { setMobileOpen(false); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "gallery", icon: <Images />,          label: "Атмосфера",onClick: () => { setMobileOpen(false); document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "contact", icon: <PhoneCall />,        label: "Контакты", onClick: () => { setMobileOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } },
  ];
  // Scroll listener
  if (typeof window !== "undefined") {
    window.onscroll = () => setNavScrolled(window.scrollY > 40);
  }

  return (
    <div>
      {/* ── NAV ── */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4 transition-all duration-300",
          navScrolled &&
            "bg-[#024996]/95 backdrop-blur-md py-3 shadow-xl shadow-black/20",
        )}
      >
        <LimelightNav
          items={mobileNavItems}
          className="bg-white/5 border border-white/10 backdrop-blur-sm"
          limelightClassName="bg-black shadow-[0_40px_25px_rgba(0,0,0,0.6)] dark:bg-white dark:shadow-[0_40px_25px_rgba(255,255,255,0.5)]"
          iconClassName="text-white"
        />

        <div className="absolute right-4 flex items-center gap-3">
          <ThemeToggle onChange={setIsDark} />
        </div>
      </nav>


      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
        style={{ backgroundColor: "#024996" }}
      >

        <div className="relative text-center px-6 animate-fade-up text-white flex flex-col items-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/50 mb-16">
            "there are no strangers here"
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-12 bg-white text-[#024996] px-10 py-4 rounded-none">
            nThat
          </h1>
          <a
            href="#menu"
            className="inline-block bg-white/15 border border-white/30 text-white px-10 py-4 rounded-none font-medium tracking-wide hover:bg-white/25 transition-all hover:-translate-y-1"
          >
            Смотреть меню
          </a>
        </div>

        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-2xl animate-bounce">
          ↓
        </span>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24 bg-[#f5f7ff] dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#024996] mb-3">
              Что попробовать
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold dark:text-white">
              Наше меню
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {(["coffee", "tea", "drinks", "cakes"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-2.5 rounded-none border-2 text-sm font-medium transition-all",
                  activeTab === tab
                    ? "bg-[#024996] border-[#024996] text-white"
                    : "border-[#024996]/20 text-neutral-500 hover:border-[#024996] hover:text-[#024996]",
                )}
              >
                {tab === "coffee" ? "Кофе" : tab === "tea" ? "Чай" : tab === "drinks" ? "Напитки" : "Cakes"}
              </button>
            ))}
          </div>

          {/* Menu Bento Grid */}
          <BentoGrid className={(activeTab === "tea" || activeTab === "drinks" || activeTab === "cakes") ? "lg:grid-rows-2" : "lg:grid-rows-4"}>
            {menuBentoData[activeTab].map((item) => (
              <div
                key={item.name}
                className={`cursor-pointer ${item.className}`}
                onClick={() => setModal({ title: item.name, items: item.subItems, imgSrc: item.imgSrc })}
              >
                <BentoCard
                  name={item.name}
                  description={item.description}
                  Icon={item.Icon}
                  href="#"
                  cta={item.price}
                  className="w-full h-full"
                  background={
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      fill
                      className="absolute inset-0 object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  }
                />
              </div>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ── BENTO — WHY US ── */}
      <section id="about" className="py-24 bg-[#eef2ff] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#024996] mb-3">
              Почему мы
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold dark:text-white">
              Больше, чем кофейня
            </h2>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {bentoFeatures.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ── STORY / STATS ── */}
      <section className="py-24 bg-[#024996] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#024996] mb-4">
              Наша история
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
              Здесь нет
              <br />чужих людей
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              nThat | Coffee Station — место, где нет чужих людей. Мы создали
              пространство, где каждый чувствует себя как дома, а каждая чашка
              кофе — повод для новой истории.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-10">
              Два адреса в городе — Азаттык 26 и Кулманова 148. Работаем
              каждый день, ждём вас с 18:30 до 03:00.
            </p>
            <div className="flex gap-10">
              {[
                { num: "2", label: "адреса" },
                { num: "1764", label: "подписчиков" },
                { num: "до 3:00", label: "работаем" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <span className="block font-serif text-4xl font-bold text-[#024996] leading-none">
                    {num}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-widest mt-1 block">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px]">
            <div className="absolute right-0 top-0 w-3/4 h-[300px] rounded-none overflow-hidden">
              <Image
                src="/photo_40_2026-03-19_21-41-52.jpg"
                alt="Flat White nThat"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-[55%] h-[200px] rounded-none overflow-hidden border-4 border-[#024996]">
              <Image
                src="/photo_41_2026-03-19_21-41-52.jpg"
                alt="Iced Latte nThat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 bg-[#f5f7ff] dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#024996] mb-3">
              Атмосфера
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold dark:text-white">
              Ваше место в городе
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { index: 0, tall: true },
              { index: 1 },
              { index: 2 },
              { index: 3, wide: true },
              { index: 4 },
            ].map(({ index, tall, wide }) => {
              const img = galleryImages[index];
              return (
                <div
                  key={img.alt}
                  onClick={() => setLightboxIndex(index)}
                  className={cn(
                    "relative overflow-hidden rounded-none group cursor-pointer",
                    tall ? "row-span-2" : "",
                    wide ? "col-span-2" : "",
                    tall ? "min-h-[420px]" : "min-h-[200px]",
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">🔍</span>
                  </div>
                  <span className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── MERCH ── */}
      <section id="merch" className="py-24 bg-[#024996]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/40 mb-3">Мерч</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
                nThat® Merch
              </h2>
              <p className="text-white/50 mt-3 text-sm max-w-sm">
                Мы запустили фирменный мерч, чтобы сделать бренд ещё более узнаваемым и близким каждому гостю
              </p>
            </div>
            <a
              href="https://wa.me/77756160097?text=Хочу заказать мерч nThat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-none bg-white hover:bg-white/90 text-[#024996] text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Заказать через WhatsApp
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* QARA KOFE tee */}
            <div className="group rounded-none overflow-hidden cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/Снимок экрана 2026-03-19 210028.png"
                  alt="QARA KOFE футболка"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-none shadow-lg">
                  <p className="text-[#024996] font-bold text-sm tracking-wide leading-tight">QARA KOFE</p>
                  <p className="text-[#024996]/60 text-[10px] tracking-widest uppercase">DRP'01—02</p>
                </div>
              </div>
              <div className="bg-[#024996] px-5 py-4">
                <p className="text-white font-semibold">Футболка «QARA KOFE»</p>
                <p className="text-white/50 text-sm mt-0.5">Белая · XS–L · На заказ</p>
              </div>
            </div>

            {/* Herday tee */}
            <div className="group rounded-none overflow-hidden cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/Снимок экрана 2026-03-19 205216.png"
                  alt="Herday футболка"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-none shadow-lg">
                  <p className="text-[#024996] font-bold text-sm tracking-wide leading-tight">Herday</p>
                  <p className="text-[#024996]/60 text-[10px] tracking-widest uppercase">DRP'01—02</p>
                </div>
              </div>
              <div className="bg-[#024996] px-5 py-4">
                <p className="text-white font-semibold">Футболка «Herday»</p>
                <p className="text-white/50 text-sm mt-0.5">Белая · XS–L · На заказ</p>
              </div>
            </div>

            {/* Sweatshirt collection */}
            <div className="group rounded-none overflow-hidden cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/Снимок экрана 2026-03-19 205035.png"
                  alt="Свитшот коллекция"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-none shadow-lg">
                  <p className="text-[#024996] font-bold text-sm tracking-wide leading-tight">nThat®</p>
                  <p className="text-[#024996]/60 text-[10px] tracking-widest uppercase">Sweatshirt collection</p>
                </div>
              </div>
              <div className="bg-[#024996] px-5 py-4">
                <p className="text-white font-semibold">Свитшот коллекция</p>
                <p className="text-white/50 text-sm mt-0.5">Тёмно-синий · XS–L · На заказ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ВАКАНСИИ ── */}
      <section id="careers" className="py-24 bg-[#f5f7ff] dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#024996] mb-4">Команда</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6 dark:text-white">
            В поисках бариста
          </h2>
          <p className="text-lg text-neutral-600 dark:text-zinc-400 mb-4 max-w-xl mx-auto">
            Условие одно — иметь страсть к кофе. Всему остальному обучим сами.
          </p>
          <p className="text-sm text-neutral-400 dark:text-zinc-500 mb-12">
            Напишите нам в WhatsApp — расскажите немного о себе
          </p>
          <a
            href="https://wa.me/77756160097?text=Хочу в команду nthat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-none bg-[#024996] hover:bg-[#024996] text-white font-medium transition-colors text-base"
          >
            Хочу в команду «nthat»
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-[#f5f7ff] dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#024996] mb-4">
              Найти нас
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-8">
              Мы вас ждём
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  Icon: MapPin,
                  label: "Адреса",
                  value: "Азаттык 26\nКулманова 148",
                },
                {
                  Icon: Clock,
                  label: "Часы работы",
                  value: "Пн–Вс: 18:30 – 03:00",
                },
                { Icon: Phone, label: "WhatsApp", value: "+7 775 616 0097" },
                {
                  Icon: Mail,
                  label: "Instagram",
                  value: "@nthatcoffee",
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="mt-0.5 p-2 rounded-none bg-[#024996]/10">
                    <Icon className="w-5 h-5 text-[#024996]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{label}</p>
                    <p className="text-sm text-neutral-500 whitespace-pre-line leading-relaxed">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8 flex-wrap">
              {["Instagram", "WhatsApp", "2GIS"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-5 py-2 rounded-none border-2 border-[#024996]/20 text-sm font-medium text-neutral-500 hover:border-[#024996] hover:text-[#024996] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Map placeholder with Unsplash aerial */}
          <div className="relative h-[380px] rounded-none overflow-hidden shadow-xl shadow-blue-900/10">
            <Image
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
              alt="Москва"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#024996]/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center gap-2">
              <span className="text-4xl">☕</span>
              <p className="font-serif text-xl font-semibold">nThat | Coffee Station</p>
              <p className="text-sm text-white/80">Азаттык 26 · Кулманова 148</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#024996] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <svg width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="23" fill="#5a5a5a"/>
              <circle cx="23" cy="23" r="20.5" fill="#3a3a3a"/>
              <circle cx="23" cy="23" r="19" fill="#1565C0"/>
              <rect x="9" y="15.5" width="28" height="15" rx="2.5" fill="white"/>
              <text x="23" y="26.5" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="10" fill="#0d2b6e" textAnchor="middle">nThat</text>
            </svg>
          </div>
          <p className="text-white/50 text-sm">
            © 2026 nThat | Coffee Station. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Оферта"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/40 text-sm hover:text-[#024996] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() => setLightboxIndex(i => (i !== null && i < galleryImages.length - 1 ? i + 1 : i))}
      />
      <MenuModal
        isOpen={!!modal}
        onClose={() => setModal(null)}
        title={modal?.title ?? ""}
        items={modal?.items ?? []}
        imgSrc={modal?.imgSrc ?? ""}
      />
    </div>
  );
}
