import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const defaultPosts = [
  {
    id: "post-1",
    num: "01",
    title: "Neural Interfaces & EMG Wristbands: The Future of AR Input",
    subtitle: "Why surface electromyography and micro-gestures are replacing camera hand-tracking.",
    category: "Neural AR",
    date: "Aug 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Micro-motor gestures detected at the wrist allow users to navigate spatial interfaces with invisible finger twitches in their pockets, solving social awkwardness and gesture fatigue.",
    content: [
      "For years, augmented reality suffered from the 'gorilla arm' dilemma: holding your hands up in mid-air to tap virtual buttons is physically exhausting and socially jarring in public spaces.",
      "The breakthrough has arrived in surface electromyography (sEMG). By detecting electrical motor signals traveling through the wrist to fingers with sub-millimeter precision, neural wristbands read intent before physical motion even completes.",
      "A microscopic twitch of your index finger against your thumb—invisible to onlookers and resting naturally inside your jacket pocket—can scroll through feeds, dismiss spatial notifications, or trigger complex UI macros.",
      "As neural bands merge with lightweight waveguide optics, we are transitioning from explicit spatial manipulation to frictionless, zero-latency ambient computing.",
    ],
    likes: 74,
    poll: {
      id: "poll-1",
      question: "Which spatial input modality will dominate consumer AR glasses?",
      totalVotes: 536,
      options: [
        { id: "opt-1", text: "Neural EMG wristbands & micro-gestures", votes: 245 },
        { id: "opt-2", text: "Eye-tracking gaze + subtle pinch", votes: 168 },
        { id: "opt-3", text: "Conversational multimodal voice AI", votes: 82 },
        { id: "opt-4", text: "Direct optical hand & finger tracking", votes: 41 },
      ],
    },
    questionnaire: {
      question: "How should spatial operating systems balance intentional input vs passive noise?",
      options: [
        {
          label: "High-threshold neural activation gates",
          explanation: "Prevents accidental triggers during natural casual hand movements.",
        },
        {
          label: "Gaze-anchored contextual confirmation",
          explanation: "Only activates inputs when visual focus is deliberately locked onto a target.",
        },
        {
          label: "Multimodal sensor fusion (EMG + Eye + Voice)",
          explanation: "Combines biometric signals to achieve zero false-positive inputs.",
        },
      ],
    },
  },
  {
    id: "post-2",
    num: "02",
    title: "3D Gaussian Splatting: Photoreal Volumetric Reality in WebXR",
    subtitle: "How millions of explicit radiance Gaussians render true real-time radiance fields at 120 FPS.",
    category: "Spatial Rendering",
    date: "Aug 21, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Traditional polygon meshes and textures fail to capture specular reflections and hair-thin transparency. 3D Gaussian Splatting solves real-time volumetric streaming for spatial web experiences.",
    content: [
      "Polygon rasterization has powered 3D graphics for forty years. Yet real-world materials—glossy automotive paints, translucent fabrics, intricate hair, and dynamic lighting bounces—require millions of microscopic polygons that overwhelm mobile AR chipsets.",
      "3D Gaussian Splatting (3DGS) fundamentally changes volumetric reconstruction. By optimizing millions of continuous, differentiable 3D ellipsoids with spherical harmonic color data, entire physical environments can be streamed and rendered in WebXR at full 120 FPS refresh rates.",
      "Unlike NeRFs, which demand heavy neural network inference per ray, Gaussian Splats rasterize directly through sorted tile pipelines, drastically cutting GPU compute and thermal load on standalone spatial hardware.",
      "We are now entering an era where capturing a memory or architectural space on a smartphone produces a photorealistic, fully navigable volumetric hologram in seconds.",
    ],
    likes: 118,
    poll: {
      id: "poll-2",
      question: "What is the biggest advantage of 3D Gaussian Splatting over traditional 3D meshes?",
      totalVotes: 648,
      options: [
        { id: "opt-1", text: "Flawless specular reflections & realistic lighting", votes: 312 },
        { id: "opt-2", text: "Instant mobile video-to-3D scan capture", votes: 194 },
        { id: "opt-3", text: "Lower GPU compute & thermal overhead vs NeRFs", votes: 142 },
      ],
    },
    questionnaire: {
      question: "Where will 3D Gaussian Splats have the most immediate commercial impact?",
      options: [
        {
          label: "Luxury e-commerce & virtual try-on product pages",
          explanation: "Accurately represents delicate tactile materials, gemstone refractivity, and texture sheen.",
        },
        {
          label: "Volumetric spatial sports & concert broadcasting",
          explanation: "Allows viewers to walk around live holographic athletes and musicians with dynamic parallax.",
        },
        {
          label: "Digital twins for precision industrial architecture",
          explanation: "Delivers sub-millimeter visual fidelity of complex manufacturing and engineering facilities.",
        },
      ],
    },
  },
  {
    id: "post-3",
    num: "03",
    title: "Optical Waveguides & MicroLEDs: The Battle for 70° FOV Glasses",
    subtitle: "Solving the fundamental optical physics behind all-day, lightweight augmented reality.",
    category: "AR Optics",
    date: "Aug 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Pass-through VR headsets isolate wearers from reality. True optical see-through glasses require silicon carbide waveguides, 5,000-nit microLED projectors, and custom focal depth layers.",
    content: [
      "Video pass-through (VST) has enabled rich mixed reality in bulky headsets, but it introduces optical distortion, peripheral blind spots, and eye-contact friction that prevent everyday social wear.",
      "The Holy Grail is Optical See-Through (OST): transparent glass lenses where photons from microscopic projectors travel through nanostructured diffractive waveguides directly into the human retina.",
      "The engineering hurdles are immense: silicon carbide substrates with high refractive indices are required to push Field of View beyond 70 degrees without severe chromatic rainbow artifacts. Simultaneously, microLED light engines must output over 5,000 nits to remain readable under direct midday sunlight.",
      "As custom liquid-crystal variable focal planes mature, vergence-accommodation conflict is eliminated, making digital holograms focus seamlessly at both reading distance and infinity.",
    ],
    likes: 64,
    poll: {
      id: "poll-3",
      question: "Will everyday consumers prefer Optical See-Through (glasses) or Video Pass-Through (headsets)?",
      totalVotes: 749,
      options: [
        { id: "opt-1", text: "Optical See-Through Glasses (Everyday social wear)", votes: 418 },
        { id: "opt-2", text: "Both will co-exist for different use cases", votes: 205 },
        { id: "opt-3", text: "Video Pass-Through Headsets (Deep immersion & gaming)", votes: 126 },
      ],
    },
  },
  {
    id: "post-4",
    num: "04",
    title: "Spatial AI & Egocentric Vision: When Models See Your World",
    subtitle: "How multimodal spatial agents ground digital intelligence into physical room geometry.",
    category: "Spatial AI",
    date: "Aug 06, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "When an AI assistant sees through your AR glasses in real time, it shifts from an abstract text box to an ambient spatial companion anchored to physical objects and contextual workflows.",
    content: [
      "Generative AI has lived inside flat browser tabs and smartphone screens. Augmented reality gives AI physical eyes and real-time spatial context.",
      "Through continuous egocentric camera feeds and spatial depth sensors, multimodal AI models build dynamic 3D scene graphs of your physical environment in real time.",
      "When you glance at an espresso machine, a faulty automotive circuit, or an architectural blueprint, the AI identifies components in 3D space, superimposing step-by-step holographic repair instructions aligned down to the millimeter.",
      "The key breakthrough is spatial semantic grounding: knowing not just what an object is, but where it exists in physical coordinate space relative to your hands and gaze.",
    ],
    likes: 92,
    poll: {
      id: "poll-4",
      question: "What is the most transformative application of Spatial AI?",
      totalVotes: 668,
      options: [
        { id: "opt-1", text: "Complex industrial & surgical step-by-step guidance", votes: 289 },
        { id: "opt-2", text: "Real-time multilingual live speech & face subtitle translation", votes: 215 },
        { id: "opt-3", text: "Ambient personal memory recall & contextual assistant", votes: 164 },
      ],
    },
  },
  {
    id: "post-5",
    num: "05",
    title: "Spatial Audio & Acoustic Raytracing: The Invisible Half of AR",
    subtitle: "Real-time acoustic material diffraction and HRTF ear geometry in augmented environments.",
    category: "Spatial Audio",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Without believable acoustic occlusion, reverberation, and wall bounce reflections, holographic objects feel like floating stickers. Acoustic raytracing grounds augmented reality into reality.",
    content: [
      "The human brain uses micro-second interaural time differences (ITD) and pinna spectral filtering to calculate sound origins with pinpoint accuracy.",
      "In AR, if a virtual character speaks from behind a physical concrete pillar, the sound cannot simply pan left or right—it must refract, diffract around the physical obstacle, and reverberate off surrounding wood, glass, and carpet materials.",
      "By running real-time acoustic raytracing algorithms synchronized with spatial room mesh scans, virtual audio objects behave indistinguishably from physical acoustic sources.",
      "Combined with personalized Head-Related Transfer Function (HRTF) profile scans captured from smartphone depth cameras, spatial audio becomes completely transparent to the listener.",
    ],
    likes: 58,
    poll: {
      id: "poll-5",
      question: "How important is realistic spatial audio compared to visual display resolution?",
      totalVotes: 541,
      options: [
        { id: "opt-1", text: "Equally important — audio sells physical presence", votes: 341 },
        { id: "opt-2", text: "Secondary — visual clarity is what users notice first", votes: 112 },
        { id: "opt-3", text: "More important for spatial disorientation & comfort", votes: 88 },
      ],
    },
  },
  {
    id: "post-6",
    num: "06",
    title: "Designing for Zero-UI & Spatial Gaze: The UX Paradigm Shift",
    subtitle: "Ditching flat skeuomorphic windows for world-anchored affordances and glance mechanics.",
    category: "Spatial UX",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Bringing 2D desktop rectangles into 3D space is a transitional crutch. The future of spatial design is contextual, world-anchored, and glance-activated.",
    content: [
      "Every computing epoch begins by mimicking its predecessor: early mobile apps copied desktop websites, and early spatial computing pasted flat 2D floating browser windows around living rooms.",
      "Mature spatial design embraces 'Zero-UI': interfaces that remain completely invisible until relevant to human intent.",
      "We design around natural ergonomic zones: the central 30-degree focal cone for active focus, the 60-degree ambient perimeter for peripheral glance notifications, and physical surface anchors for persistent widgets.",
      "By replacing persistent visual noise with reactive glance mechanics and micro-spatial depth states, interfaces elevate human presence rather than obstructing it.",
    ],
    likes: 85,
    poll: {
      id: "poll-6",
      question: "What is the biggest design mistake in current spatial applications?",
      totalVotes: 724,
      options: [
        { id: "opt-1", text: "Cluttering field of view with floating 2D windows", votes: 382 },
        { id: "opt-2", text: "Ignoring physical ergonomics & neck strain zones", votes: 197 },
        { id: "opt-3", text: "Excessive aggressive notification popups in peripheral vision", votes: 145 },
      ],
    },
  },
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const postsCollection = db.collection("posts");

    // Upsert or sync current posts based on ID
    for (const post of defaultPosts) {
      await postsCollection.updateOne(
        { id: post.id },
        { $set: post },
        { upsert: true }
      );
    }

    // Remove any legacy/old posts not in defaultPosts
    const currentIds = defaultPosts.map((p) => p.id);
    await postsCollection.deleteMany({ id: { $nin: currentIds } });

    const posts = await postsCollection.find({}).sort({ num: 1 }).toArray();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("MongoDB GET posts error:", error);
    // Fallback to local default posts if connection has network latency
    return NextResponse.json({ success: true, posts: defaultPosts, fallback: true });
  }
}
