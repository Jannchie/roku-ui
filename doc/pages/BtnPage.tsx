import { useState } from 'react';
import {
  Btn, Colors, Container, Panel, Typography,
} from '../../src';

function LoadingTemplate() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState<Colors>('primary');
  return (
    <div className="flex flex-col items-start gap-2">
      <Btn
        color={color}
        loading={loading}
        size="sm"
        style={{ width: 128 }}
        onClick={() => {
          setColor((val) => (val === 'primary' ? 'success' : 'primary'));
          setLoading((val) => !val);
        }}
      >
        {loading ? 'Loading' : 'Click'}
      </Btn>
      <Btn
        color="fuchsia"
        loading={loading}
        size="sm"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Small
      </Btn>
      <Btn
        color="pink"
        loading={loading}
        size="md"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Medium
      </Btn>
      <Btn
        color="pink"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </Btn>
      <Btn
        color="red"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        Loading Button Large
      </Btn>
      <Btn
        icon
        color="green"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val);
        }}
      >
        <span className="material-symbols-rounded">check_circle</span>
      </Btn>
    </div>
  );
}
const AllTemplate = () => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <Btn color="primary" label="Primary" />
      <Btn color="success" label="Success" />
      <Btn color="danger" label="Danger" />
      <Btn color="warning" label="Warning" />
      <Btn label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn border color="primary" label="Primary" />
      <Btn border color="success" label="Success" />
      <Btn border color="danger" label="Danger" />
      <Btn border color="warning" label="Warning" />
      <Btn border label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn text hoverColor="primary" label="Primary" />
      <Btn text hoverColor="success" label="Success" />
      <Btn text hoverColor="danger" label="Danger" />
      <Btn text hoverColor="warning" label="Warning" />
      <Btn text label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn dash text color="primary" label="Primary" />
      <Btn dash text color="success" label="Success" />
      <Btn dash text color="danger" label="Danger" />
      <Btn dash text color="warning" label="Warning" />
      <Btn dash text label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn border dash text color="primary" label="Primary" />
      <Btn border dash text color="success" label="Success" />
      <Btn border dash text color="danger" label="Danger" />
      <Btn border dash text color="warning" label="Warning" />
      <Btn border dash text label="Default" />
    </div>
    <div className="flex gap-2">
      <Btn dash disabled color="primary" label="Primary" />
      <Btn dash disabled color="success" label="Success" />
      <Btn dash disabled color="danger" label="Danger" />
      <Btn dash disabled color="warning" label="Warning" />
      <Btn dash disabled label="Default" />
    </div>
  </div>
);

function CounterBtnTemplate() {
  const [fillA, setFillA] = useState(false);
  const [fillB, setFillB] = useState(false);
  const [fillC, setFillC] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter size="sm" value={2} icon="chat_bubble" fill={fillA} onClick={() => { setFillA(!fillA); }} />
        <Btn.Counter size="sm" color="red" value={4} icon="favorite" fill={fillB} onClick={() => { setFillB(!fillB); }} />
        <Btn.Counter size="sm" color="green" value={7} icon="reply" fill={fillC} onClick={() => { setFillC(!fillC); }} />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter size="md" value={2} icon="chat_bubble" fill={fillA} onClick={() => { setFillA(!fillA); }} />
        <Btn.Counter size="md" color="red" value={4} icon="favorite" fill={fillB} onClick={() => { setFillB(!fillB); }} />
        <Btn.Counter size="md" color="green" value={7} icon="reply" fill={fillC} onClick={() => { setFillC(!fillC); }} />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn.Counter size="lg" value={2} icon="chat_bubble" fill={fillA} onClick={() => { setFillA(!fillA); }} />
        <Btn.Counter size="lg" color="red" value={4} icon="favorite" fill={fillB} onClick={() => { setFillB(!fillB); }} />
        <Btn.Counter size="lg" color="green" value={7} icon="reply" fill={fillC} onClick={() => { setFillC(!fillC); }} />
      </div>
    </div>
  );
}

export function BtnPage() {
  return (
    <div
      style={{
        padding: 8,
        borderRadius: '8px 0 0 0 ',
        height: '100%',
      }}
    >
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Typography.H1>
            Button
          </Typography.H1>
          <Panel border>
            <CounterBtnTemplate />
          </Panel>
          <Panel border>
            <AllTemplate />
          </Panel>
          <Panel border>
            <LoadingTemplate />
          </Panel>
        </div>
      </Container>
    </div>
  );
}
