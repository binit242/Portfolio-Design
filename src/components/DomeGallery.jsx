import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_VIDEOS = [
    {
    src: '/GALLERY/1.1.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },
  {
    src: '/GALLERY/2.1.mp4',
    alt: 'Another vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },
  {
    src: '/GALLERY/4.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/6.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/6F4E4CA9E993D3F0AA5738E3640B8383_video_dashinit.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/7.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/7E456C8BAD16B6B6E80F8BBE44D5A199_video_dashinit.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/8.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/AQMXgT28rwbhOtLjRZhPMZkX_sBGEyPu4yQ3rPmsO809VvsGyUDmR6HHcjnj9Jrf9WrYsc1bZnj1YgXMITJc1Izx.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/AQOJdMdtUW518kD1ic0jWi3jP-MbjqaeBWTUoIa2cSa7BDWq8eb08vsk50SqLuaey20b6HzRjR9fCRG-gGAFA8DP.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/AQPN3kCB7S07Z6JK5kmllI15ul4lbWy4oTGYe5S0OkrfW9S2nRRo_oI0SFr5Ncp7-9lsigjWRJgN-Ow227zvH_Wg.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/BC401F21A282E19BE1ABA7F1A655F59C_video_dashinit.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/Comp 1_1.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/F843C18776CD618C8B03D161CA4321A8_video_dashinit.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/hashtag.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/hype boy#NewJeans #뉴진스 #HANNI #하니.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/kai cenat.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/Lisa ver. .#kpop #kpopdance #kpopedit #edit #editing #editkpop #lisa #lisablackpink #lisamanoban #lisaedit #edit #blackpink #blackpinklisa #fy #ilovzy #wallpaper #wallpapers.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/Sequence 01.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/success.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/tahnks.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },{
    src: '/GALLERY/truth.mp4',
    alt: 'Sample vertical video',
    poster: 'https://unsplash.com/photos/white-wall-paint-with-black-line-R53t-Tg6J4c'
  },
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el, name, fallback) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool, seg) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '', poster: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      `[DomeGallery] Provided video count (${pool.length}) exceeds available tiles (${totalSlots}). Some videos will not be shown.`
    );
  }

  const normalizedVideos = pool.map(video => {
    if (typeof video === 'string') {
      return { src: video, alt: '', poster: '' };
    }
    return { src: video.src || '', alt: video.alt || '', poster: video.poster || '' };
  });

  const usedVideos = Array.from({ length: totalSlots }, (_, i) => normalizedVideos[i % normalizedVideos.length]);

  for (let i = 1; i < usedVideos.length; i++) {
    if (usedVideos[i].src === usedVideos[i - 1].src) {
      for (let j = i + 1; j < usedVideos.length; j++) {
        if (usedVideos[j].src !== usedVideos[i].src) {
          const tmp = usedVideos[i];
          usedVideos[i] = usedVideos[j];
          usedVideos[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedVideos[i].src,
    alt: usedVideos[i].alt,
    poster: usedVideos[i].poster
  }));
}

function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  videos = DEFAULT_VIDEOS,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedVideoWidth = '250px',
  openedVideoHeight = '444px', // 9:16 aspect ratio
  videoBorderRadius = '30px',
  openedVideoBorderRadius = '30px',
  grayscale = true
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const frameRef = useRef(null);
  const viewerRef = useRef(null);
  const scrimRef = useRef(null);
  const focusedElRef = useRef(null);
  const originalTilePositionRef = useRef(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(videos, segments), [videos, segments]);

  // --- Optimization: Track which video is "active" (centered) ---
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper to determine which video is closest to the center
  useEffect(() => {
    const updateActive = () => {
      if (!sphereRef.current) return;
      const itemsEls = Array.from(sphereRef.current.querySelectorAll('.item__image'));
      let minDist = Infinity, minIdx = 0;
      itemsEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - window.innerWidth / 2;
        const dy = cy - window.innerHeight / 2;
        const dist = dx * dx + dy * dy;
        if (dist < minDist) {
          minDist = dist;
          minIdx = i;
        }
      });
      setActiveIndex(minIdx);
    };
    updateActive();
    window.addEventListener('resize', updateActive);
    return () => window.removeEventListener('resize', updateActive);
  }, [items.length]);

  // Pause videos that are not active (only play a few near the center)
  useEffect(() => {
    if (!sphereRef.current) return;
    const videos = sphereRef.current.querySelectorAll('video');
    videos.forEach((vid, i) => {
      if (Math.abs(i - activeIndex) <= 2) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [activeIndex, items.length]);
  // --- End optimization ---

  const applyTransform = (xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', videoBorderRadius);
      root.style.setProperty('--enlarge-radius', openedVideoBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge');
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedVideoWidth && openedVideoHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = `position: absolute; width: ${openedVideoWidth}; height: ${openedVideoHeight}; visibility: hidden;`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = `${centeredLeft}px`;
          enlargedOverlay.style.top = `${centeredTop}px`;
        } else {
          enlargedOverlay.style.left = `${frameR.left - mainR.left}px`;
          enlargedOverlay.style.top = `${frameR.top - mainR.top}px`;
          enlargedOverlay.style.width = `${frameR.width}px`;
          enlargedOverlay.style.height = `${frameR.height}px`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    videoBorderRadius,
    openedVideoBorderRadius,
    openedVideoWidth,
    openedVideoHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx, vy) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();
        const evt = event;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
        const evt = event;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;
        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }
        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }
        if (last) {
          draggingRef.current = false;
          let [vMagX, vMagY] = velocity;
          const [dirX, dirY] = direction;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;
          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
            vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
          }
          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;
    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement;
      const overlay = viewerRef.current?.querySelector('.enlarge');
      if (!overlay) return;
      const refDiv = parent.querySelector('.item__image--reference');
      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove();
        if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        el.style.visibility = '';
        el.style.zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        unlockScroll();
        return;
      }
      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current.getBoundingClientRect();
      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height
      };
      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height
      };
      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = `position:absolute;left:${overlayRelativeToRoot.left}px;top:${overlayRelativeToRoot.top}px;width:${overlayRelativeToRoot.width}px;height:${overlayRelativeToRoot.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${enlargeTransitionMs}ms ease-out;pointer-events:none;margin:0;transform:none;`;
      const originalVid = overlay.querySelector('video');
      if (originalVid) {
        const vid = originalVid.cloneNode(true);
        vid.muted = true;
        vid.controls = false;
        vid.autoplay = true;
        vid.loop = true;
        vid.currentTime = 0;
        vid.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        animatingOverlay.appendChild(vid);
      }
      overlay.remove();
      rootRef.current.appendChild(animatingOverlay);
      void animatingOverlay.getBoundingClientRect();
      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
        animatingOverlay.style.opacity = '0';
      });
      const cleanup = () => {
        animatingOverlay.remove();
        originalTilePositionRef.current = null;
        if (refDiv) refDiv.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          el.style.zIndex = 0;
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');
          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';
            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true')
                  document.body.classList.remove('dg-scroll-lock');
              }, 300);
            });
          });
        });
      };
      animatingOverlay.addEventListener('transitionend', cleanup, { once: true });
    };
    scrim.addEventListener('click', close);
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, unlockScroll]);

  const openItemFromElement = useCallback(
    el => {
      if (openingRef.current) return;
      openingRef.current = true;
      openStartedAtRef.current = performance.now();
      lockScroll();
      const parent = el.parentElement;
      focusedElRef.current = el;
      el.setAttribute('data-focused', 'true');
      const offsetX = getDataNumber(parent, 'offsetX', 0);
      const offsetY = getDataNumber(parent, 'offsetY', 0);
      const sizeX = getDataNumber(parent, 'sizeX', 2);
      const sizeY = getDataNumber(parent, 'sizeY', 2);
      const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
      const parentY = normalizeAngle(parentRot.rotateY);
      const globalY = normalizeAngle(rotationRef.current.y);
      let rotY = -(parentY + globalY) % 360;
      if (rotY < -180) rotY += 360;
      const rotX = -parentRot.rotateX - rotationRef.current.x;
      parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
      parent.style.setProperty('--rot-x-delta', `${rotX}deg`);
      const refDiv = document.createElement('div');
      refDiv.className = 'item__image item__image--reference';
      refDiv.style.opacity = '0';
      refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
      parent.appendChild(refDiv);
      const tileR = refDiv.getBoundingClientRect();
      const mainR = mainRef.current.getBoundingClientRect();
      const frameR = frameRef.current.getBoundingClientRect();
      originalTilePositionRef.current = { left: tileR.left, top: tileR.top, width: tileR.width, height: tileR.height };
      el.style.visibility = 'hidden';
      el.style.zIndex = 0;
      const overlay = document.createElement('div');
      overlay.className = 'enlarge';
      overlay.style.position = 'absolute';
      overlay.style.left = frameR.left - mainR.left + 'px';
      overlay.style.top = frameR.top - mainR.top + 'px';
      overlay.style.width = frameR.width + 'px';
      overlay.style.height = frameR.height + 'px';
      overlay.style.opacity = '0';
      overlay.style.zIndex = '30';
      overlay.style.willChange = 'transform, opacity';
      overlay.style.transformOrigin = 'top left';
      overlay.style.transition = `transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease`;
      const rawSrc = parent.dataset.src || el.querySelector('video')?.getAttribute('src') || '';
      const poster = parent.dataset.poster || el.querySelector('video')?.getAttribute('poster') || '';
      const vid = document.createElement('video');
      vid.src = rawSrc;
      vid.poster = poster;
      vid.style.width = '100%';
      vid.style.height = '100%';
      vid.style.objectFit = 'cover';
      vid.controls = true;
      vid.autoplay = false;
      vid.muted = false;
      vid.loop = true;
      vid.playsInline = true;
      overlay.appendChild(vid);
      viewerRef.current.appendChild(overlay);
      const tx0 = tileR.left - frameR.left;
      const ty0 = tileR.top - frameR.top;
      const sx0 = tileR.width / frameR.width;
      const sy0 = tileR.height / frameR.height;
      overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${sx0}, ${sy0})`;
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(0px, 0px) scale(1,1)';
        rootRef.current?.setAttribute('data-enlarging', 'true');
      });
      const wantsResize = openedVideoWidth || openedVideoHeight;
      if (wantsResize) {
        const onFirstEnd = ev => {
          if (ev.propertyName !== 'transform') return;
          overlay.removeEventListener('transitionend', onFirstEnd);
          const prevTransition = overlay.style.transition;
          overlay.style.transition = 'none';
          const tempWidth = openedVideoWidth || `${frameR.width}px`;
          const tempHeight = openedVideoHeight || `${frameR.height}px`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
          const newRect = overlay.getBoundingClientRect();
          overlay.style.width = frameR.width + 'px';
          overlay.style.height = frameR.height + 'px';
          void overlay.offsetWidth;
          overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;
          const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
          requestAnimationFrame(() => {
            overlay.style.left = `${centeredLeft}px`;
            overlay.style.top = `${centeredTop}px`;
            overlay.style.width = tempWidth;
            overlay.style.height = tempHeight;
          });
          const cleanupSecond = () => {
            overlay.removeEventListener('transitionend', cleanupSecond);
            overlay.style.transition = prevTransition;
          };
          overlay.addEventListener('transitionend', cleanupSecond, { once: true });
        };
        overlay.addEventListener('transitionend', onFirstEnd);
      }
    },
    [enlargeTransitionMs, lockScroll, openedVideoHeight, openedVideoWidth, segments]
  );

  const onTileClick = useCallback(
    e => {
      if (draggingRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const onTilePointerUp = useCallback(
    e => {
      if (e.pointerType !== 'touch') return;
      if (draggingRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const onTileTouchEnd = useCallback(
    e => {
      if (draggingRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        ['--segments-x']: segments,
        ['--segments-y']: segments,
        ['--overlay-blur-color']: overlayBlurColor,
        ['--tile-radius']: videoBorderRadius,
        ['--enlarge-radius']: openedVideoBorderRadius,
        ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
      }}
    >
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere" style={{ willChange: 'transform' }}>
            {items.map((it, i) => (
              <div
                key={`${it.x},${it.y},${i}`}
                className="item"
                data-src={it.src}
                data-poster={it.poster}
                data-offset-x={it.x}
                data-offset-y={it.y}
                data-size-x={it.sizeX}
                data-size-y={it.sizeY}
                style={{
                  ['--offset-x']: it.x,
                  ['--offset-y']: it.y,
                  ['--item-size-x']: it.sizeX,
                  ['--item-size-y']: it.sizeY
                }}
              >
                <div
                  className="item__image"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt || 'Open video'}
                  onClick={onTileClick}
                  onPointerUp={onTilePointerUp}
                  onTouchEnd={onTileTouchEnd}
                >
                  <video
                    src={it.src}
                    poster={it.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="none"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      aspectRatio: '9/16'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        <div className="viewer" ref={viewerRef}>
          <div ref={scrimRef} className="scrim" />
          <div ref={frameRef} className="frame" />
        </div>
      </main>
    </div>
  );}