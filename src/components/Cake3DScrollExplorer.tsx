"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Sparkles, Layers, Sliders, RotateCw, Check, Video, Box, Play, Pause } from "lucide-react";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LayerDetail {
  number: string;
  name: string;
  frenchTitle: string;
  description: string;
  specs: string;
  accentColor: string;
  origin: string;
}

interface CakeFlavorTheme {
  id: string;
  name: string;
  tagline: string;
  crownColor: number;
  creamColor: number;
  fruitColor: number;
  spongeColor: number;
  baseColor: number;
  layers: LayerDetail[];
}

const CAKE_THEMES: CakeFlavorTheme[] = [
  {
    id: "strawberry-cloud",
    name: "Strawberry Cloud Gateau",
    tagline: "Wild Berry Glaze & Tahitian Vanilla Silk",
    crownColor: 0xee2c68,
    creamColor: 0xfffcf5,
    fruitColor: 0xba1346,
    spongeColor: 0xf5cf8e,
    baseColor: 0xb57845,
    layers: [
      {
        number: "01",
        name: "Glaze Crown & Fresh Flora",
        frenchTitle: "Le Miroir aux Fraises des Bois",
        description:
          "Mirror-sheen ruby glaze crowned with alpine wild strawberries, fresh mint sprigs, and delicate flakes of edible 24k gold leaf.",
        specs: "Glaze applied at 32°C &bull; Hand-placed botanicals",
        accentColor: "#F13D70",
        origin: "Hautes-Alpes & Paris",
      },
      {
        number: "02",
        name: "Tahitian Vanilla Chantilly",
        frenchTitle: "La Crème Namelaka à la Vanille",
        description:
          "Air-whipped double cream infused for 24 hours with plump Tahitian Bourbon orchid pods, fluted with 16 piped rosettes.",
        specs: "Chilled at 4°C &bull; 38% Normandy AOP butterfat",
        accentColor: "#FFD968",
        origin: "Tahiti & Normandy",
      },
      {
        number: "03",
        name: "Ruby Fruit Gelée Core",
        frenchTitle: "Le Cœur de Fruits Rouges",
        description:
          "Slow-simmered reduction of wild mountain strawberries and purple passion fruit pulp for an electric burst of balanced tartness.",
        specs: "Low-sugar pectin set &bull; 82% fresh fruit content",
        accentColor: "#D91A5B",
        origin: "Piedmont & Bahia",
      },
      {
        number: "04",
        name: "Genoese Almond Sponge",
        frenchTitle: "Le Biscuit Moelleux aux Amandes",
        description:
          "Finely milled almond flour folded into slow-whipped meringue, gentle steam-baked at 165°C to preserve tender cloud softness.",
        specs: "Steam-baked 165°C &bull; Infused with elderflower syrup",
        accentColor: "#FFA726",
        origin: "Provence & Charente",
      },
      {
        number: "05",
        name: "Crisp Feuilletine Praline Base",
        frenchTitle: "Le Croustillant Praliné Feuilletine",
        description:
          "Golden caramelized French crêpe dentelle wafer flakes bound with stone-ground roasted hazelnut praliné and Brittany sea salt crystals.",
        specs: "Zero moisture absorption barrier &bull; 100% crunch",
        accentColor: "#795548",
        origin: "Brittany & Piedmont",
      },
    ],
  },
  {
    id: "midnight-chocolate",
    name: "The Midnight Chocolate",
    tagline: "72% Valrhona Dark Ganache & Fleur de Sel",
    crownColor: 0x221316,
    creamColor: 0x4a2a2f,
    fruitColor: 0x7c1529,
    spongeColor: 0x3d2024,
    baseColor: 0x2e191b,
    layers: [
      {
        number: "01",
        name: "Dark Cacao Mirror & Gold",
        frenchTitle: "Le Miroir Noir Valrhona",
        description:
          "Glass-like 72% Valrhona Guanaja dark chocolate mirror glaze dusted with hand-placed edible 24k gold leaf and roasted cocoa nibs.",
        specs: "Poured at 34°C &bull; Single-origin Madagascar cacao",
        accentColor: "#FFD700",
        origin: "Sambirano Valley",
      },
      {
        number: "02",
        name: "Silky Dark Chocolate Namelaka",
        frenchTitle: "La Namelaka Chocolat Noir",
        description:
          "Ultra-emulsified chocolate cream with notes of dried red currants, roasted espresso bean, and velvety cultured cream.",
        specs: "48-hour crystallization &bull; Melt-in-mouth mouthfeel",
        accentColor: "#D48B55",
        origin: "Tain-l'Hermitage",
      },
      {
        number: "03",
        name: "Tart Morello Cherry Compote",
        frenchTitle: "La Griotte Acidulée",
        description:
          "Jewel-toned sour Morello cherries slow-poached with Madagascar vanilla and a hint of dark tonka bean reduction.",
        specs: "Natural tart balance &bull; Whole preserved fruit bites",
        accentColor: "#A31631",
        origin: "Black Forest",
      },
      {
        number: "04",
        name: "Decadent Cacao Pain de Gênes",
        frenchTitle: "Le Biscuit Cacao Pur Beurre",
        description:
          "Rich chocolate sponge enriched with almond paste and browned Normandy butter, delivering intense aromatic depth.",
        specs: "Baked with raw Dutch-process cacao &bull; Moist crumb",
        accentColor: "#8D6E63",
        origin: "Normandy, France",
      },
      {
        number: "05",
        name: "Roasted Hazelnut Feuilletine",
        frenchTitle: "Le Croustillant Noisettes du Piémont",
        description:
          "Piedmont IGP hazelnuts roasted to deep amber, folded into dark cocoa butter and crispy French crêpe shards.",
        specs: "Guérande fleur de sel crunch &bull; Architectural base",
        accentColor: "#5D4037",
        origin: "Piedmont, Italy",
      },
    ],
  },
  {
    id: "pistachio-velvet",
    name: "Pistachio Velvet Gateau",
    tagline: "Bronte Pistachio Silk & Raspberry Ribbon",
    crownColor: 0x1f593b,
    creamColor: 0xf4f9f4,
    fruitColor: 0xc2185b,
    spongeColor: 0x82b47d,
    baseColor: 0x718355,
    layers: [
      {
        number: "01",
        name: "Emerald Pistachio Velvet Spray",
        frenchTitle: "Le Velours Pistache de Bronte",
        description:
          "Matte emerald velvet cocoa butter finish adorned with sliced pistachio emeralds, freeze-dried raspberries, and gold leaf.",
        specs: "Airbrushed at 42°C &bull; Micro-crystal velvet texture",
        accentColor: "#00966C",
        origin: "Mount Etna, Sicily",
      },
      {
        number: "02",
        name: "Whipped Mascarpone Silk",
        frenchTitle: "La Crème Mascarpone Aérienne",
        description:
          "Lombardy mascarpone whipped with orange blossom essence and white cocoa butter for a featherlight cloud texture.",
        specs: "Infused with organic citrus zest &bull; Gentle floral aroma",
        accentColor: "#7DD7BE",
        origin: "Lombardy, Italy",
      },
      {
        number: "03",
        name: "Wild Raspberry Reduction",
        frenchTitle: "Le Confit Framboises Sauvages",
        description:
          "Intense tart raspberry ribbon cutting through the nutty pistachio richness with vibrant ruby acidity.",
        specs: "No artificial flavoring &bull; 100% natural berry pectin",
        accentColor: "#E91E63",
        origin: "Hautes-Alpes",
      },
      {
        number: "04",
        name: "Pistachio Dacquoise Sponge",
        frenchTitle: "La Dacquoise Pistache",
        description:
          "Rustic meringue sponge textured with coarsely chopped roasted Bronte pistachios and almond meal.",
        specs: "Crisp exterior, chewy heart &bull; Slow oven baked",
        accentColor: "#52BBA0",
        origin: "Sicily",
      },
      {
        number: "05",
        name: "Salted Pistachio Sablé Base",
        frenchTitle: "Le Sablé Breton Pistache",
        description:
          "Traditional Breton shortbread infused with toasted pistachio paste and crunchy crystal fleur de sel.",
        specs: "Rich butter crumb &bull; Golden melt-in-mouth finish",
        accentColor: "#3E5C46",
        origin: "Brittany",
      },
    ],
  },
];

export function Cake3DScrollExplorer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Active theme & layer inspection
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number | null>(null);
  const [explosionProgress, setExplosionProgress] = useState(0); // 0 to 1
  const [viewMode, setViewMode] = useState<"3d" | "video">("3d");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const sliderVideoRef = useRef<HTMLVideoElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // References to Three.js elements
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cakeGroupRef = useRef<THREE.Group | null>(null);
  const layersGroupRef = useRef<{
    tier1_Base: THREE.Group;
    tier2_Sponge: THREE.Group;
    tier3_Fruit: THREE.Group;
    tier4_Cream: THREE.Group;
    tier5_Crown: THREE.Group;
  } | null>(null);

  // Particle sparkle reference
  const particlesRef = useRef<THREE.Points | null>(null);

  // Interaction mouse/drag variables
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const manualRotationRef = useRef({ x: 0.15, y: 0 });

  const currentTheme = CAKE_THEMES[activeThemeIndex];

  // Helper to update 3D layers positions based on explosion progress (0 to 1)
  const applyExplosion = useCallback((progress: number) => {
    if (!layersGroupRef.current) return;
    const { tier1_Base, tier2_Sponge, tier3_Fruit, tier4_Cream, tier5_Crown } =
      layersGroupRef.current;

    // Smooth eased vertical explosion displacements
    // Progress 0 = fully assembled cake
    // Progress 1 = expanded architectural layers
    tier5_Crown.position.y = 1.9 + progress * 2.5;
    tier4_Cream.position.y = 0.95 + progress * 1.4;
    tier3_Fruit.position.y = 0.35 + progress * 0.6;
    tier2_Sponge.position.y = -0.3 - progress * 0.25;
    tier1_Base.position.y = -0.9 - progress * 0.8;

    // Slight dynamic tier tilt during explosion for dramatic 3D perspective
    tier5_Crown.rotation.x = Math.sin(progress * Math.PI) * 0.05;
    tier1_Base.rotation.x = -Math.sin(progress * Math.PI) * 0.04;

    // Synchronize video timeline scrub if video is mounted
    if (sliderVideoRef.current && sliderVideoRef.current.duration) {
      sliderVideoRef.current.currentTime = progress * sliderVideoRef.current.duration;
    }
  }, []);

  // Update 3D Materials when Cake Flavor Theme changes
  useEffect(() => {
    if (!layersGroupRef.current) return;
    const { tier1_Base, tier2_Sponge, tier3_Fruit, tier4_Cream, tier5_Crown } =
      layersGroupRef.current;

    // Update Crown Glaze Material
    tier5_Crown.traverse((child) => {
      if (child instanceof THREE.Mesh && child.name === "crownMesh") {
        (child.material as THREE.MeshStandardMaterial).color.setHex(
          currentTheme.crownColor
        );
      }
    });

    // Update Cream Chantilly Material
    tier4_Cream.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        (child.material as THREE.MeshStandardMaterial).color.setHex(
          currentTheme.creamColor
        );
      }
    });

    // Update Fruit Gelee Material
    tier3_Fruit.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        (child.material as THREE.MeshStandardMaterial).color.setHex(
          currentTheme.fruitColor
        );
      }
    });

    // Update Sponge Material
    tier2_Sponge.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        (child.material as THREE.MeshStandardMaterial).color.setHex(
          currentTheme.spongeColor
        );
      }
    });

    // Update Base Material
    tier1_Base.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        (child.material as THREE.MeshStandardMaterial).color.setHex(
          currentTheme.baseColor
        );
      }
    });
  }, [activeThemeIndex, currentTheme]);

  // Three.js Scene Setup & Render Loop
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container || typeof window === "undefined") return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 9.5);
    cameraRef.current = camera;

    // 3. Renderer with high color fidelity and soft shadows
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting Choreography (Luxury Food Photography Studio)
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.4);
    scene.add(ambientLight);

    // Warm Key Light (top-left front)
    const keyLight = new THREE.DirectionalLight(0xfff3dc, 2.2);
    keyLight.position.set(6, 10, 7);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Soft Fill Light (bottom-right)
    const fillLight = new THREE.DirectionalLight(0xfce7f3, 1.1);
    fillLight.position.set(-6, 4, 5);
    scene.add(fillLight);

    // Crisp Cool Rim Light (back-top) for edge definition
    const rimLight = new THREE.DirectionalLight(0xdbeafe, 1.6);
    rimLight.position.set(0, 8, -6);
    scene.add(rimLight);

    // 5. Build Master Cake Group
    const cakeMasterGroup = new THREE.Group();
    cakeGroupRef.current = cakeMasterGroup;
    scene.add(cakeMasterGroup);

    // Marble & Brass Pedestal Stand
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, -1.8, 0);

    // Pedestal Plate (White Carrara Marble)
    const pedestalPlateGeom = new THREE.CylinderGeometry(3.6, 3.8, 0.35, 64);
    const pedestalPlateMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.05,
    });
    const pedestalPlate = new THREE.Mesh(pedestalPlateGeom, pedestalPlateMat);
    pedestalPlate.receiveShadow = true;
    pedestalGroup.add(pedestalPlate);

    // Pedestal Golden Bevel Ring
    const goldRingGeom = new THREE.TorusGeometry(3.7, 0.07, 16, 64);
    const goldRingMat = new THREE.MeshStandardMaterial({
      color: 0xdfb15b,
      roughness: 0.25,
      metalness: 0.85,
    });
    const goldRing = new THREE.Mesh(goldRingGeom, goldRingMat);
    goldRing.rotation.x = Math.PI / 2;
    goldRing.position.y = 0.16;
    pedestalGroup.add(goldRing);

    // Pedestal Stem
    const stemGeom = new THREE.CylinderGeometry(1.2, 1.8, 0.7, 48);
    const stemMesh = new THREE.Mesh(stemGeom, pedestalPlateMat);
    stemMesh.position.y = -0.5;
    pedestalGroup.add(stemMesh);

    // Pedestal Base Foot
    const footGeom = new THREE.CylinderGeometry(2.2, 2.6, 0.25, 48);
    const footMesh = new THREE.Mesh(footGeom, pedestalPlateMat);
    footMesh.position.y = -0.95;
    pedestalGroup.add(footMesh);

    cakeMasterGroup.add(pedestalGroup);

    // ----------------------------------------------------
    // BUILD THE 5 DISSECTABLE CAKE TIERS
    // ----------------------------------------------------

    // TIER 1: Crisp Praline Feuilletine Base
    const tier1 = new THREE.Group();
    tier1.position.y = -0.9;
    const baseGeom = new THREE.CylinderGeometry(2.7, 2.75, 0.55, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: CAKE_THEMES[0].baseColor,
      roughness: 0.85,
      metalness: 0.05,
    });
    const baseMesh = new THREE.Mesh(baseGeom, baseMat);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    tier1.add(baseMesh);

    // Praline Crunch Particles Ring around base
    const nibGeom = new THREE.DodecahedronGeometry(0.08, 0);
    const nibMat = new THREE.MeshStandardMaterial({
      color: 0x4a2e18,
      roughness: 0.9,
    });
    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const r = 2.72 + (Math.random() - 0.5) * 0.06;
      const nib = new THREE.Mesh(nibGeom, nibMat);
      nib.position.set(
        Math.cos(angle) * r,
        (Math.random() - 0.5) * 0.35,
        Math.sin(angle) * r
      );
      nib.scale.setScalar(0.7 + Math.random() * 0.6);
      tier1.add(nib);
    }
    cakeMasterGroup.add(tier1);

    // TIER 2: Slow-Baked Almond Genoese Sponge
    const tier2 = new THREE.Group();
    tier2.position.y = -0.3;
    const spongeGeom = new THREE.CylinderGeometry(2.65, 2.65, 0.7, 64);
    const spongeMat = new THREE.MeshStandardMaterial({
      color: CAKE_THEMES[0].spongeColor,
      roughness: 0.7,
      metalness: 0.02,
    });
    const spongeMesh = new THREE.Mesh(spongeGeom, spongeMat);
    spongeMesh.castShadow = true;
    spongeMesh.receiveShadow = true;
    tier2.add(spongeMesh);
    cakeMasterGroup.add(tier2);

    // TIER 3: Ruby Fruit Gelée / Passion Compote
    const tier3 = new THREE.Group();
    tier3.position.y = 0.35;
    const fruitGeom = new THREE.CylinderGeometry(2.62, 2.62, 0.5, 64);
    const fruitMat = new THREE.MeshStandardMaterial({
      color: CAKE_THEMES[0].fruitColor,
      roughness: 0.12,
      metalness: 0.1,
      transparent: true,
      opacity: 0.94,
    });
    const fruitMesh = new THREE.Mesh(fruitGeom, fruitMat);
    fruitMesh.castShadow = true;
    fruitMesh.receiveShadow = true;
    tier3.add(fruitMesh);
    cakeMasterGroup.add(tier3);

    // TIER 4: Tahitian Vanilla Chantilly Mousse
    const tier4 = new THREE.Group();
    tier4.position.y = 0.95;
    const creamGeom = new THREE.CylinderGeometry(2.6, 2.6, 0.75, 64);
    const creamMat = new THREE.MeshStandardMaterial({
      color: CAKE_THEMES[0].creamColor,
      roughness: 0.3,
      metalness: 0.05,
    });
    const creamMesh = new THREE.Mesh(creamGeom, creamMat);
    creamMesh.castShadow = true;
    creamMesh.receiveShadow = true;
    tier4.add(creamMesh);

    // Piped Chantilly Rosettes encircling upper perimeter
    const rosetteGeom = new THREE.SphereGeometry(0.22, 16, 16);
    rosetteGeom.scale(1, 1.3, 1);
    for (let i = 0; i < 18; i++) {
      const angle = (i / 18) * Math.PI * 2;
      const rosette = new THREE.Mesh(rosetteGeom, creamMat);
      rosette.position.set(
        Math.cos(angle) * 2.5,
        0.38,
        Math.sin(angle) * 2.5
      );
      rosette.castShadow = true;
      tier4.add(rosette);
    }
    cakeMasterGroup.add(tier4);

    // TIER 5: Glaze Crown, Sculpted Berries, Mint & 24k Gold
    const tier5 = new THREE.Group();
    tier5.position.y = 1.9;
    const crownGeom = new THREE.CylinderGeometry(2.62, 2.62, 0.35, 64);
    const crownMat = new THREE.MeshStandardMaterial({
      color: CAKE_THEMES[0].crownColor,
      roughness: 0.08,
      metalness: 0.22,
    });
    const crownMesh = new THREE.Mesh(crownGeom, crownMat);
    crownMesh.name = "crownMesh";
    crownMesh.castShadow = true;
    crownMesh.receiveShadow = true;
    tier5.add(crownMesh);

    // Sculpted 3D Strawberries on Top
    const berryMat = new THREE.MeshStandardMaterial({
      color: 0xd61c4e,
      roughness: 0.2,
      metalness: 0.1,
    });
    const blueberryMat = new THREE.MeshStandardMaterial({
      color: 0x2b1e42,
      roughness: 0.25,
    });

    const berryPositions = [
      { x: 0, z: 0, s: 1.2, r: 0 },
      { x: 1.1, z: 0.6, s: 0.95, r: 0.4 },
      { x: -0.9, z: 0.8, s: 0.9, r: -0.3 },
      { x: 0.7, z: -1.0, s: 0.85, r: 0.8 },
      { x: -0.8, z: -0.7, s: 0.9, r: -0.6 },
    ];

    berryPositions.forEach((pos, idx) => {
      const berryGeom = new THREE.ConeGeometry(0.32, 0.6, 24);
      const berry = new THREE.Mesh(berryGeom, idx % 2 === 0 ? berryMat : blueberryMat);
      berry.rotation.x = Math.PI + (pos.r || 0);
      berry.rotation.z = (pos.r || 0) * 0.4;
      berry.position.set(pos.x, 0.45, pos.z);
      berry.scale.setScalar(pos.s);
      berry.castShadow = true;
      tier5.add(berry);
    });

    // 24k Gold Leaf Flakes Floating on Glaze
    const goldFlakeGeom = new THREE.PlaneGeometry(0.12, 0.12);
    const goldFlakeMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.1,
      metalness: 0.95,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 18; i++) {
      const flake = new THREE.Mesh(goldFlakeGeom, goldFlakeMat);
      const angle = (i / 18) * Math.PI * 2;
      const r = 0.5 + Math.random() * 1.8;
      flake.position.set(
        Math.cos(angle) * r,
        0.22,
        Math.sin(angle) * r
      );
      flake.rotation.x = Math.PI / 2;
      flake.rotation.z = Math.random() * Math.PI;
      tier5.add(flake);
    }

    // Fresh Botanical Mint Sprig
    const mintMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32,
      roughness: 0.4,
      side: THREE.DoubleSide,
    });
    const leafGeom = new THREE.SphereGeometry(0.2, 12, 12);
    leafGeom.scale(1.2, 0.15, 0.7);
    const leaf1 = new THREE.Mesh(leafGeom, mintMat);
    leaf1.position.set(0.3, 0.6, 0.2);
    leaf1.rotation.y = 0.5;
    tier5.add(leaf1);

    const leaf2 = new THREE.Mesh(leafGeom, mintMat);
    leaf2.position.set(-0.3, 0.62, -0.1);
    leaf2.rotation.y = -0.8;
    tier5.add(leaf2);

    cakeMasterGroup.add(tier5);

    layersGroupRef.current = {
      tier1_Base: tier1,
      tier2_Sponge: tier2,
      tier3_Fruit: tier3,
      tier4_Cream: tier4,
      tier5_Crown: tier5,
    };

    // 6. Atmospheric Floating Golden Confectionary Sparkles
    const particleCount = 75;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xffd968,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    particlesRef.current = particles;
    scene.add(particles);

    // Initial position
    cakeMasterGroup.rotation.y = 0.4;
    cakeMasterGroup.rotation.x = 0.12;

    // 7. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Gentle continuous floating when idle
      if (!isDraggingRef.current && cakeGroupRef.current) {
        cakeGroupRef.current.position.y = Math.sin(time * 1.5) * 0.08;
        cakeGroupRef.current.rotation.y += delta * 0.15; // Slow continuous 3D showroom rotation
      }

      // Rotate particle sparkle cloud
      if (particlesRef.current) {
        particlesRef.current.rotation.y += delta * 0.05;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    // 8. Handle Resizing
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // Run once on mount

  // GSAP ScrollTrigger Integration: Bind vertical scroll to 3D cake explosion!
  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2200",
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setExplosionProgress(progress);
          applyExplosion(progress);

          // Rotate cake based on scroll travel
          if (cakeGroupRef.current) {
            cakeGroupRef.current.rotation.y = progress * Math.PI * 3.5;
            cakeGroupRef.current.rotation.x = 0.15 + Math.sin(progress * Math.PI) * 0.12;
          }

          // Camera moves slightly back as cake explodes
          if (cameraRef.current) {
            cameraRef.current.position.z = 9.5 + progress * 2.2;
            cameraRef.current.position.y = 1.2 + progress * 0.5;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced, applyExplosion]);

  // Interactive Slider Handler: Allows user to scrub directly
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setExplosionProgress(val);
    applyExplosion(val);

    if (cakeGroupRef.current) {
      cakeGroupRef.current.rotation.y = val * Math.PI * 3;
    }
  };

  // 3D Canvas Mouse Drag-to-Rotate handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !cakeGroupRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    manualRotationRef.current.y += deltaX * 0.008;
    manualRotationRef.current.x += deltaY * 0.008;

    cakeGroupRef.current.rotation.y = manualRotationRef.current.y;
    cakeGroupRef.current.rotation.x = Math.max(
      -0.2,
      Math.min(0.5, manualRotationRef.current.x)
    );

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch handlers for mobile 3D drag
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !cakeGroupRef.current || e.touches.length !== 1)
      return;
    const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
    const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

    manualRotationRef.current.y += deltaX * 0.01;
    manualRotationRef.current.x += deltaY * 0.01;

    cakeGroupRef.current.rotation.y = manualRotationRef.current.y;
    cakeGroupRef.current.rotation.x = Math.max(
      -0.2,
      Math.min(0.5, manualRotationRef.current.x)
    );

    previousMousePositionRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="3d-cake"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FFFDF7] text-[#1C2421] flex flex-col justify-between py-16 sm:py-24 overflow-hidden border-b border-[#00966C]/10 select-none"
      aria-label="3D Interactive Cake Anatomy & Scroll Experience"
    >
      {/* Background Soft Pastel Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-[600px] h-[600px] bg-[#FAD5DF]/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-20 w-[650px] h-[650px] bg-[#C6F6E5]/40 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFF2B2]/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between h-full">
        {/* Top Header Bar & Flavor Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00966C]/10 text-[#004F3C] text-xs font-black tracking-widest uppercase mb-2 border border-[#00966C]/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00966C]" />
              <span>Scroll-Interactive 3D Anatomy &bull; Haute Pâtisserie Architecture</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#004F3C] tracking-tight">
              Anatomy of a Masterpiece
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#2C4A3E] mt-1 max-w-lg">
              Scroll down or drag the slider to dissect each tier in full real-time 3D. Click and drag the canvas to spin 360°.
            </p>
          </div>

          {/* Mode Switcher & Flavor Selector */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle: 3D WebGL vs 4K Cake Video */}
            <div className="inline-flex p-1 rounded-full bg-white border border-[#00966C]/25 shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                  viewMode === "3d"
                    ? "bg-[#00966C] text-white shadow-sm"
                    : "text-[#2C4A3E] hover:text-[#004F3C]"
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D WebGL</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("video")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                  viewMode === "video"
                    ? "bg-[#00966C] text-white shadow-sm"
                    : "text-[#2C4A3E] hover:text-[#004F3C]"
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>4K Cake Video</span>
              </button>
            </div>

            {/* Flavor Switcher Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-[#004F3C]/70 uppercase tracking-wider mr-1 hidden xl:inline">
                Gateau:
              </span>
              {CAKE_THEMES.map((theme, idx) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setActiveThemeIndex(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-sm ${
                    activeThemeIndex === idx
                      ? "bg-[#004F3C] text-white shadow-sm"
                      : "bg-white text-[#2C4A3E] hover:bg-[#FAD5DF] border border-[#00966C]/20"
                  }`}
                >
                  <span>{theme.name.split(" ")[0]}</span>
                  {activeThemeIndex === idx && <Check className="w-3 h-3" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN 3D SHOWCASE & HUD DISPLAY */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 my-2">
          {/* LEFT: 3D WebGL Canvas / 4K Video Viewport (7 cols) */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] lg:h-[580px] rounded-3xl bg-gradient-to-b from-white/80 via-[#FFF9FB]/70 to-[#FFF4F7]/90 border border-white shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
            {/* The 3D Canvas Mount Point */}
            <div
              ref={canvasContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-300 ${
                viewMode === "3d" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0"
              }`}
              title="Click and drag to rotate the cake in 3D"
            />

            {/* Video Mode Viewport */}
            {viewMode === "video" && (
              <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center animate-in fade-in duration-300">
                <video
                  ref={sliderVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={`${basePath}/cake-video-poster.png`}
                  className="w-full h-full object-cover"
                >
                  <source src={`${basePath}/cake-video.mp4`} type="video/mp4" />
                  <source src={`${basePath}/videos/cake-video.mp4`} type="video/mp4" />
                </video>

                {/* Video Play/Pause floating overlay */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2.5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold shadow-xl border border-white/20">
                  <button
                    type="button"
                    onClick={() => {
                      if (!sliderVideoRef.current) return;
                      if (isVideoPlaying) {
                        sliderVideoRef.current.pause();
                        setIsVideoPlaying(false);
                      } else {
                        sliderVideoRef.current.play().catch(() => {});
                        setIsVideoPlaying(true);
                      }
                    }}
                    className="flex items-center gap-1.5 hover:text-[#7DD7BE] transition-colors"
                  >
                    {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isVideoPlaying ? "Pause Video" : "Play Video"}</span>
                  </button>
                  <span className="text-white/30">|</span>
                  <span className="text-[11px] text-[#7DD7BE]">
                    Scrub with slider below
                  </span>
                </div>
              </div>
            )}

            {/* Orbit / Drag Hint Pill */}
            {viewMode === "3d" && (
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#004F3C] border border-[#00966C]/20 shadow-sm pointer-events-none">
                <RotateCw className="w-3.5 h-3.5 text-[#00966C] animate-spin-slow" />
                <span>Drag to rotate 360°</span>
              </div>
            )}

            {/* Live Explosion State Pill */}
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAD5DF] text-[#004F3C] text-[11px] font-black shadow-sm pointer-events-none">
              <Layers className="w-3.5 h-3.5 text-[#F13D70]" />
              <span>
                {viewMode === "video"
                  ? "4K Cinema Timeline"
                  : explosionProgress < 0.15
                  ? "Assembled Gateau"
                  : explosionProgress > 0.75
                  ? "Full 3D Layer Explosion"
                  : "Dissecting Architecture"}
              </span>
            </div>

            {/* Dynamic Layer Height Markers */}
            <div className="absolute bottom-4 right-4 flex items-center gap-3 text-[10px] font-mono font-bold text-[#004F3C]/60 pointer-events-none px-2">
              <span>[ 5 DISCIPLINED TIERS ]</span>
              <span>[ {viewMode === "3d" ? "360° WEBGL PERSPECTIVE" : "4K CINEMATIC MASTER"} ]</span>
            </div>
          </div>

          {/* RIGHT: Interactive Layer Breakdown Callouts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 overflow-y-auto max-h-[580px] pr-1">
            <div className="flex items-center justify-between pb-2 border-b border-[#00966C]/15">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#004F3C]">
                ✦ Architecture & Culinary Specs
              </span>
              <span className="text-xs font-bold text-[#F13D70]">
                {Math.round(explosionProgress * 100)}% Dissected
              </span>
            </div>

            {currentTheme.layers.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              return (
                <div
                  key={layer.number}
                  onClick={() => setSelectedLayerIndex(isSelected ? null : idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? "bg-white shadow-xl border-[#00966C] scale-[1.02]"
                      : "bg-white/80 hover:bg-white border-[#00966C]/10 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-black text-white shadow-sm"
                        style={{ backgroundColor: layer.accentColor }}
                      >
                        {layer.number}
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-[#004F3C]">
                        {layer.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-[#00966C] uppercase font-bold">
                      {layer.origin}
                    </span>
                  </div>

                  <p className="font-serif italic text-xs text-[#F13D70] mb-1">
                    {layer.frenchTitle}
                  </p>

                  <p className="font-sans text-xs text-[#2C4A3E] leading-relaxed mb-2">
                    {layer.description}
                  </p>

                  <div className="pt-1.5 border-t border-neutral-100 flex items-center justify-between text-[10px] text-[#004F3C]/80 font-medium">
                    <span dangerouslySetInnerHTML={{ __html: layer.specs }} />
                    <span className="text-[10px] font-bold text-[#00966C]">
                      Tier {layer.number}/05
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM DUAL CONTROL: Tactile Scrub Slider & Actions */}
        <div className="relative mt-4 p-4 rounded-2xl bg-white/95 border border-[#00966C]/20 shadow-lg backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Slider Title & Label */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#004F3C] shrink-0">
              <Sliders className="w-4 h-4 text-[#00966C]" />
              <span>Interactive 3D Slider:</span>
              <span className="font-mono text-[#F13D70]">
                {Math.round(explosionProgress * 100)}%
              </span>
            </div>

            {/* Slider Scrub Track */}
            <div className="flex-1 w-full max-w-xl flex items-center gap-3">
              <span className="text-[11px] font-bold text-[#004F3C]/60 whitespace-nowrap">
                Assembled
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={explosionProgress}
                onChange={handleSliderChange}
                aria-label="3D Layer Explosion Slider"
                className="w-full h-2.5 bg-[#FDE8EF] rounded-lg appearance-none cursor-pointer accent-[#00966C]"
              />
              <span className="text-[11px] font-bold text-[#004F3C]/60 whitespace-nowrap">
                Exploded
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const target = explosionProgress > 0.5 ? 0 : 1;
                  setExplosionProgress(target);
                  applyExplosion(target);
                }}
                className="px-3.5 py-1.5 rounded-full bg-[#FAD5DF] hover:bg-[#F13D70] hover:text-white text-[#004F3C] text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                {explosionProgress > 0.5 ? "Assemble Cake" : "Explode All"}
              </button>

              <a
                href="#star-menu"
                className="px-3.5 py-1.5 rounded-full bg-[#00966C] hover:bg-[#004F3C] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Taste Gateau ✦
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
