import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { breakpoints } from './styles/theme';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { GlobalStyle } from '../createGlobalStyle';
import wallpaper from './assets/WindowsXP.jpg';
import xpAudio from './assets/xpAudio.mp3';

type AppId = 'about' | 'skills' | 'projects' | 'contact' | 'resume';
type WindowState = { id: AppId; x: number; y: number; minimized: boolean; maximized: boolean; z: number };
type DragState = { id: AppId; pointerX: number; pointerY: number; windowX: number; windowY: number; element: HTMLElement };

const apps: { id: AppId; title: string; icon: string; content: ReactNode }[] = [
  { id: 'about', title: 'DevKemel.exe — Sobre mim', icon: '🖥️', content: <Header /> },
  { id: 'skills', title: 'Habilidades', icon: '📁', content: <Skills /> },
  { id: 'projects', title: 'Meus projetos', icon: '🌐', content: <Projects /> },
  { id: 'contact', title: 'MSN Messenger — Contato', icon: '💬', content: <Contact /> },
  { id: 'resume', title: 'Currículo — Bruno Kemel', icon: '📄', content: <ResumeViewer /> },
];

const ResumeFrame = styled.div`
  display: flex; flex-direction: column; gap: 8px; height: 100%; min-height: 0; padding: 12px;
  color: #20354a; background: #d8e2ed;
  .question { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 12px; padding: 10px 12px; border: 1px solid #9ab0c5; background: linear-gradient(#fff,#e5eef7); font: 13px Tahoma,sans-serif; }
  .question strong { margin-right: auto; }
  .action { padding: 6px 11px; color: #173b68; border: 1px solid #7896b4; background: linear-gradient(#fff,#dce8f4); box-shadow: 1px 1px white inset,-1px -1px #a1b4c8 inset; font: 12px Tahoma,sans-serif; text-decoration: none; cursor: pointer; }
  .action:hover { background: linear-gradient(#fff,#c5dcf3); }
  iframe { flex: 1; width: 100%; min-height: 240px; border: 1px solid #879bae; background: white; }
  @media (max-width: 600px) { padding: 7px; gap: 6px; .question { padding: 8px; gap: 7px; } .question strong { flex-basis: 100%; } .action { flex: 1; text-align: center; } }
`;

function ResumeViewer() {
  const [askDownload, setAskDownload] = useState(true);
  const pdfUrl = '/assets/Bruno_Kemel_CV.pdf';

  return <ResumeFrame>
    {askDownload && <div className="question" role="group" aria-label="Opções para baixar o currículo">
      <strong>Currículo aberto. Deseja baixar uma cópia?</strong>
      <a className="action" href={pdfUrl} download="Bruno_Kemel_CV.pdf">Sim, baixar PDF</a>
      <button className="action" onClick={() => setAskDownload(false)}>Agora não</button>
    </div>}
    <iframe src={`${pdfUrl}#view=FitH`} title="Currículo de Bruno Kemel em PDF" />
    <a className="action" href={pdfUrl} target="_blank" rel="noreferrer">Abrir PDF em nova guia</a>
  </ResumeFrame>;
}

const Desktop = styled.main`
  position: fixed; inset: 0 0 38px; overflow: hidden; isolation: isolate;
  color: #fff;
  background: url(${wallpaper}) center center / cover no-repeat;
`;

const DesktopIcons = styled.div`
  position: absolute; inset: 18px auto 18px 14px; z-index: 1;
  display: flex; flex-flow: column wrap; align-content: flex-start; gap: 10px; width: 94px;
  @media (max-width: 600px) { inset: 10px 6px auto; flex-flow: row nowrap; align-content: flex-start; width: auto; height: 72px; gap: 4px; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; &::-webkit-scrollbar { display: none; } }
`;

const IconButton = styled.button`
  width: 84px; min-height: 82px; padding: 6px 3px; border: 1px solid transparent; border-radius: 3px;
  display: flex; align-items: center; flex-direction: column; gap: 5px; cursor: pointer;
  color: white; background: transparent; font: 12px Tahoma, sans-serif; text-align: center;
  text-shadow: 1px 1px 2px #102e48, -1px -1px 2px #102e48;
  &:hover, &:focus-visible { background: #b5d9f433; border-color: #d5edff88; outline: 1px dotted white; }
  .icon { font-size: 32px; line-height: 1; filter: drop-shadow(1px 2px 1px #123); }
  @media (max-width: 600px) { flex: 0 0 58px; width: 58px; min-height: 68px; padding: 4px 2px; font-size: 9px; line-height: 1.1; .icon { font-size: 27px; } }
`;

const Window = styled.section<{ $x: number; $y: number; $z: number; $maximized: boolean }>`
  position: absolute; z-index: ${({ $z }) => $z};
  left: ${({ $x, $maximized }) => $maximized ? '0' : `${$x}px`}; top: ${({ $y, $maximized }) => $maximized ? '0' : `${$y}px`};
  width: ${({ $maximized }) => $maximized ? '100%' : 'min(1180px, calc(100vw - 150px))'};
  height: ${({ $maximized }) => $maximized ? '100%' : 'min(780px, calc(100vh - 105px))'};
  display: flex; flex-direction: column; overflow: hidden;
  background: #f2f6fb; border: 1px solid #073b80; border-radius: 8px 8px 3px 3px;
  box-shadow: 2px 2px 0 #fff9 inset, 0 12px 32px #00345488;
  @media (max-width: 600px) { left: ${({ $maximized }) => $maximized ? '0' : '4px'}; top: ${({ $maximized }) => $maximized ? '0' : '92px'}; width: calc(100vw - 8px); height: ${({ $maximized }) => $maximized ? '100%' : 'calc(100% - 96px)'}; }
`;

const BrowserBar = styled.div`
  flex: 0 0 48px; display: flex; align-items: center; gap: 7px; padding: 6px 10px;
  color: #35465a; background: linear-gradient(#fff,#e3e7ec); border-bottom: 1px solid #a7b5c4;
  font: 12px Tahoma,sans-serif;
  button { height: 30px; padding: 0 12px; color: #243c56; border: 1px solid #98a9bb; background: linear-gradient(#fff,#dce5ee); box-shadow: 1px 1px white inset; cursor: pointer; }
  .label { white-space: nowrap; }
  .address { flex: 1; min-width: 0; padding: 7px 9px; color: #174c83; background: white; border: 1px solid #99a8b8; overflow: hidden; white-space: nowrap; }
`;

const MessengerCard = styled.aside`
  position: absolute; z-index: 1190; right: clamp(8px, 2vw, 30px); top: clamp(8px, 3vh, 30px); width: min(328px, calc(100vw - 16px)); overflow: hidden;
  color: #174674; border: 1px solid #8ca9c4; border-radius: 10px; background: #f2f7fd; box-shadow: 0 8px 24px #14365055;
  .profile { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: linear-gradient(#fff,#c2e4f5); border-bottom: 1px solid #a7c4da; }
  .presence { width: 18px; height: 18px; border-radius: 50%; background: #74c937; box-shadow: 0 0 0 3px #fff; }
  .name { font-weight: bold; font-size: 16px; } .status { margin-top: 4px; color: #657d92; font-size: 13px; }
  .line { display: block; width: 100%; padding: 12px 16px; color: #174674; text-align: left; border: 0; border-bottom: 1px solid #d2dfeb; background: transparent; font: 13px Tahoma,sans-serif; }
  button.line { cursor: pointer; } button.line:hover { background: #e1f0fd; }
  @media (max-width: 600px) {
    top: 86px; right: 8px; width: min(300px, calc(100vw - 16px));
    .profile { gap: 9px; padding: 10px 12px; }
    .name { font-size: 14px; }
    .status, .line { font-size: 11px; }
    .line { padding: 9px 12px; }
  }
`;

const Winamp = styled.aside`
  position: absolute; z-index: 1200; right: clamp(8px, 2vw, 30px); bottom: clamp(8px, 3vh, 30px); width: min(328px, calc(100vw - 16px)); padding: 8px;
  color: #dbe3ea; border: 3px solid #566b7b; background: linear-gradient(#3d4650,#252c33); box-shadow: 0 6px 18px #10253888;
  .top { display: flex; justify-content: space-between; padding: 0 2px 8px; color: #ffd369; font: bold 11px 'Lucida Console',monospace; }
  .display { padding: 12px; color: #37f17a; background: #07130d; font: bold 14px 'Lucida Console',monospace; }
  .track { margin-top: 6px; color: #65cc86; font: 10px 'Lucida Console',monospace; }
  .controls { display: flex; gap: 5px; padding-top: 8px; }
  button { width: 36px; height: 28px; color: #f3f6f8; border: 1px solid #8493a0; background: linear-gradient(#59636e,#37414a); cursor: pointer; }
  button:hover { background: linear-gradient(#71808c,#46545f); }
  .volume-control { display: flex; align-items: center; gap: 5px; margin-left: auto; }
  .volume-control button { width: 24px; height: 26px; padding: 0; border: 0; background: transparent; font-size: 15px; }
  .volume-control input { width: 62px; height: 16px; accent-color: #8fc9ff; cursor: pointer; }
  .volume-level { width: 28px; color: #cbd5df; text-align: right; font: 10px 'Lucida Console',monospace; }
  @media (max-width: 420px) {
    padding: 6px;
    .display { padding: 9px; font-size: 12px; }
    .track { font-size: 9px; }
    .controls button { width: 32px; height: 26px; }
    .volume-control { gap: 3px; }
    .volume-control input { width: 48px; }
    .volume-level { width: 25px; font-size: 9px; }
  }
`;

const TitleBar = styled.div`
  flex: 0 0 34px; display: flex; align-items: center; gap: 8px; padding: 4px 6px 4px 10px;
  color: white; cursor: grab; touch-action: none; user-select: none;
  background: linear-gradient(180deg,#65b4f6 0%,#3184dc 36%,#1761bd 82%,#0c4ba5 100%);
  border-bottom: 1px solid #073b80; text-shadow: 1px 1px #173f7b; font: bold 13px Tahoma, sans-serif;
  &:active { cursor: grabbing; }
  .title { flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
`;

const WindowControls = styled.div`
  display: flex; gap: 3px;
  button { width: 23px; height: 22px; padding: 0; border: 1px solid #d4e9ff; border-radius: 4px; color: white; font: bold 13px Tahoma; background: linear-gradient(#86bff0,#2768bb); box-shadow: 1px 1px #fff8 inset,-1px -1px #164681 inset; cursor: pointer; }
  button:last-child { background: linear-gradient(#f98e80,#d82b16); }
  button:hover { filter: brightness(1.12); }
`;

const WindowContent = styled.div`
  flex: 1; min-height: 0; overflow: auto; color: #20354a; background: linear-gradient(#fff,#eff5fb);
  & > header, & > section { min-height: 100% !important; padding: 20px !important; overflow: visible !important; background: transparent !important; }
  & > header > div, & > section > div { max-width: none !important; width: 100% !important; margin: 0 !important; padding: 20px !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; background: transparent !important; }
  & > header > div::before, & > section > div::before { display: none !important; }
  @media (max-width: 600px) { & > header, & > section { padding: 12px !important; } & > header > div, & > section > div { padding: 14px !important; } }
`;

const StartMenu = styled.div`
  position: fixed; z-index: 2000; left: 6px; bottom: 40px; width: min(330px, calc(100vw - 12px));
  padding: 10px; border: 1px solid #174780; border-radius: 7px 7px 0 0;
  background: linear-gradient(110deg,#f5f9ff,#c7d8ec); box-shadow: 3px 3px 12px #001d3c88;
  .banner { margin: -10px -10px 8px; padding: 12px; border-radius: 6px 6px 0 0; color: white; font-weight: bold; background: linear-gradient(#5da8f3,#1556b5); text-shadow: 1px 1px #173f7b; }
  button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 9px 10px; border: 0; border-radius: 3px; text-align: left; color: #173b68; background: transparent; font: 13px Tahoma; cursor: pointer; }
  button:hover { background: #bcd9f5; }
`;

const Taskbar = styled.footer`
  position: fixed; z-index: 1500; inset: auto 0 0; height: 38px; display: flex; align-items: center; gap: 7px; padding: 4px 7px;
  color: white; background: linear-gradient(180deg,#3c91e5,#1357ad 55%,#0b438d); border-top: 1px solid #7ab8f0; box-shadow: 0 -2px 8px #00274a55; font: 12px Tahoma,sans-serif;
  button { color: white; cursor: pointer; font: inherit; }
  .start { height: 29px; padding: 3px 16px; border-radius: 13px; font-weight: bold; text-shadow: 1px 1px #20511e; background: linear-gradient(#81d75d,#268b26 55%,#176b1b); border: 1px solid #b5e89b; box-shadow: 1px 1px #fff8 inset; }
  .task { display: flex; align-items: center; gap: 7px; flex: 0 1 180px; min-width: 92px; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 7px 12px; border: 1px solid #0c4388; background: linear-gradient(#2d78ca,#1b5aa9); box-shadow: 1px 1px #ffffff33 inset; }
  .task[aria-pressed="true"] { background: linear-gradient(#10488f,#236dc1); border-color: #073b80; box-shadow: 1px 1px #073b80 inset, 0 0 0 1px #5da8f3; }
  .clock { margin-left: auto; flex: 0 0 94px; min-width: 94px; padding: 3px 10px; border-left: 1px solid #73a8dc; text-align: center; line-height: 1.25; white-space: nowrap; }
  @media (max-width: 600px) {
    gap: 5px; padding: 4px 5px;
    .start { flex: 0 0 auto; padding: 3px 9px; }
    .clock { flex-basis: 76px; min-width: 76px; padding: 3px 5px; font-size: 10px; }
  }
`;

const TaskItems = styled.div`
  display: flex; align-items: center; gap: 5px; flex: 1; min-width: 0; overflow-x: auto; scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  .task { flex: 0 0 145px; }
  @media (max-width: 600px) { .task { flex-basis: 112px; min-width: 0; padding: 7px 8px; font-size: 11px; } }
`;

function App() {
  const [windows, setWindows] = useState<WindowState[]>(() => [{
    id: 'about',
    x: Math.max(110, Math.round((window.innerWidth - Math.min(1180, window.innerWidth - 150)) / 2)),
    y: 58,
    minimized: false,
    maximized: false,
    z: 2,
  }]);
  const [active, setActive] = useState<AppId | null>('about');
  const [startOpen, setStartOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [muted, setMuted] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const dragState = useRef<DragState | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const openApp = (id: AppId) => {
    setStartOpen(false);
    setWindows(current => {
      const existing = current.find(item => item.id === id);
      const z = Math.max(1, ...current.map(item => item.z)) + 1;
      if (existing) return current.map(item => item.id === id ? { ...item, minimized: false, z } : item);
      const offset = (current.length - 1) * 28;
      const width = Math.min(1180, window.innerWidth - 150);
      return [...current, { id, x: Math.max(110, Math.round((window.innerWidth - width) / 2) + offset), y: 58 + offset, minimized: false, maximized: false, z }];
    });
    setActive(id);
  };

  const bringToFront = (id: AppId) => {
    setActive(id);
    setWindows(current => {
      const z = Math.max(1, ...current.map(item => item.z)) + 1;
      return current.map(item => item.id === id ? { ...item, z, minimized: false } : item);
    });
  };

  const onDrag = (event: PointerEvent<HTMLDivElement>, id: AppId) => {
    const drag = dragState.current;
    if (!drag || drag.id !== id || event.buttons !== 1) return;
    const dx = Math.max(0, Math.min(window.innerWidth - 100, drag.windowX + event.clientX - drag.pointerX)) - drag.windowX;
    const dy = Math.max(0, Math.min(window.innerHeight - 100, drag.windowY + event.clientY - drag.pointerY)) - drag.windowY;
    drag.element.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>, item: WindowState) => {
    if ((event.target as HTMLElement).closest('button') || item.maximized) return;
    const element = event.currentTarget.parentElement;
    if (!element) return;
    dragState.current = { id: item.id, pointerX: event.clientX, pointerY: event.clientY, windowX: item.x, windowY: item.y, element };
    bringToFront(item.id);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishDrag = (id: AppId) => {
    const drag = dragState.current;
    if (!drag || drag.id !== id) return;
    const bounds = drag.element.getBoundingClientRect();
    const x = Math.max(0, Math.min(window.innerWidth - 100, bounds.left));
    const y = Math.max(0, Math.min(window.innerHeight - 100, bounds.top));
    setWindows(current => current.map(item => item.id === id ? { ...item, x, y } : item));
    dragState.current = null;
    requestAnimationFrame(() => { drag.element.style.transform = ''; });
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (muted || audio.muted || volume === 0) {
      if (volume === 0) changeVolume(0.4);
      audio.muted = false;
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  };

  const changeVolume = (value: number) => {
    const nextVolume = Math.max(0, Math.min(1, value));
    setVolume(nextVolume);
    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
      audioRef.current.muted = false;
    }
    setMuted(false);
  };

  const restartPlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    if (audio.paused) void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  return (
    <ThemeProvider theme={breakpoints}>
      <GlobalStyle />
      <Desktop aria-label="Área de trabalho do DevKemel">
        <DesktopIcons>
          {apps.map(app => <IconButton key={app.id} onClick={() => openApp(app.id)} aria-label={`Abrir ${app.title}`}><span className="icon" aria-hidden="true">{app.id === 'about' ? '🖥️' : app.id === 'skills' ? '📂' : app.id === 'projects' ? '📁' : app.id === 'contact' ? '💬' : '📄'}</span><span>{app.id === 'about' ? 'Meu Computador' : app.id === 'skills' ? 'Habilidades' : app.id === 'projects' ? 'Meus Projetos' : app.id === 'contact' ? 'MSN Messenger' : 'Currículo PDF'}</span></IconButton>)}
        </DesktopIcons>
        <MessengerCard aria-label="Cartão de contato MSN Messenger">
          <div className="profile"><span className="presence" /><div><div className="name">DevKemel</div><div className="status">Available · online</div></div><span style={{ marginLeft: 'auto', fontSize: 20 }}>◯</span></div>
          <div className="line">🟢 &nbsp; Building cool things</div>
          <button className="line" onClick={() => openApp('contact')}>✉ &nbsp; Send me a message</button>
        </MessengerCard>
        <Winamp aria-label="Player de música estilo Winamp">
          <div className="top"><span>◀ WINAMP 2.95 ▶</span><span>×</span></div>
          <div className="display">{playing ? '▶' : 'Ⅱ'} &nbsp; Windows XP Startup<div className="track">Microsoft Windows XP · Startup sound</div></div>
          <div className="controls"><button aria-label="Reiniciar áudio" onClick={restartPlayback}>|◀</button><button aria-label={playing ? 'Pausar áudio' : 'Reproduzir áudio'} onClick={togglePlayback}>{playing ? 'Ⅱ' : '▶'}</button><button aria-label="Recomeçar áudio" onClick={restartPlayback}>▶|</button><div className="volume-control"><button aria-label={muted || volume === 0 ? 'Ativar som' : 'Silenciar'} title={muted || volume === 0 ? 'Ativar som' : 'Silenciar'} onClick={toggleMute}>{muted || volume === 0 ? '◖×' : '◖))'}</button><input aria-label="Volume do áudio" type="range" min="0" max="1" step="0.01" value={volume} onChange={event => changeVolume(Number(event.currentTarget.value))} /><output className="volume-level">{Math.round(volume * 100)}%</output></div></div>
          <audio ref={audioRef} src={xpAudio} preload="metadata" onLoadedMetadata={event => { event.currentTarget.volume = volume; }} onEnded={() => setPlaying(false)} />
        </Winamp>
        {windows.filter(item => !item.minimized).map(item => {
          const app = apps.find(entry => entry.id === item.id)!;
          return <Window key={item.id} $x={item.x} $y={item.y} $z={item.z} $maximized={item.maximized} aria-label={app.title} onPointerDown={() => bringToFront(item.id)}>
            <TitleBar onPointerDown={event => startDrag(event, item)} onPointerMove={event => onDrag(event, item.id)} onPointerUp={() => finishDrag(item.id)} onPointerCancel={() => finishDrag(item.id)}>
              <span aria-hidden="true">{app.icon}</span><span className="title">{app.title}</span>
              <WindowControls>
                <button aria-label="Minimizar" title="Minimizar" onClick={() => { setWindows(current => current.map(win => win.id === item.id ? { ...win, minimized: true } : win)); setActive(null); }}>−</button>
                <button aria-label={item.maximized ? 'Restaurar' : 'Maximizar'} title={item.maximized ? 'Restaurar' : 'Maximizar'} onClick={() => setWindows(current => current.map(win => win.id === item.id ? { ...win, maximized: !win.maximized } : win))}>{item.maximized ? '❐' : '□'}</button>
                <button aria-label="Fechar" title="Fechar" onClick={() => { setWindows(current => current.filter(win => win.id !== item.id)); setActive(null); }}>×</button>
              </WindowControls>
            </TitleBar>
            {item.id === 'about' && <BrowserBar><button onClick={() => openApp('about')}>← Back</button><button onClick={() => openApp('projects')}>→</button><span className="label">Address</span><div className="address">http://www.devkemel.com/portfolio</div><button onClick={() => bringToFront('about')}>Go</button></BrowserBar>}
            <WindowContent>{app.content}</WindowContent>
          </Window>;
        })}
      </Desktop>
      {startOpen && <StartMenu aria-label="Menu Iniciar"><div className="banner">👤 Bruno Kemel · DevKemel</div>{apps.map(app => <button key={app.id} onClick={() => openApp(app.id)}><span aria-hidden="true">{app.icon}</span>{app.title}</button>)}</StartMenu>}
      <Taskbar aria-label="Barra de tarefas">
        <button className="start" aria-expanded={startOpen} onClick={() => setStartOpen(value => !value)}>⊞ Iniciar</button>
        <TaskItems>
          {windows.map(item => <button key={item.id} className="task" aria-pressed={!item.minimized && active === item.id} onClick={() => item.minimized || active !== item.id ? bringToFront(item.id) : setWindows(current => current.map(win => win.id === item.id ? { ...win, minimized: true } : win))}><span aria-hidden="true">{apps.find(app => app.id === item.id)?.icon}</span><span>{apps.find(app => app.id === item.id)?.title}</span></button>)}
        </TaskItems>
        <time className="clock" dateTime={now.toISOString()}>
          {now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}<br />
          {now.toLocaleDateString('pt-BR')}
        </time>
      </Taskbar>
    </ThemeProvider>
  );
}

export default App;
