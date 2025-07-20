import TextPressure from './TextPressure';

function Secondsec() {
  return (
    <div style={{ position: 'relative', height: 'full', backgroundColor: '#000' }}>
         <img
  src="/FW_Plastik_39.png"
  alt="Overlay"
  className="absolute inset-0 w-full h-full object-scale-up z-10 mix-blend-screen"
/>

      <TextPressure
        text="Hello!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}

export default Secondsec;
