import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSession } from '../context/useSession'
import { MODULES_ORDER } from '../data/trainingModules'

function ScriptingMatrix({ matrix }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">{matrix.scenario}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-2">
            ❌ {matrix.low.label}
          </h4>
          <p className="text-sm text-slate-700 italic whitespace-pre-line">{matrix.low.text}</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">
            ✅ {matrix.high.label}
          </h4>
          <p className="text-sm text-slate-700 italic whitespace-pre-line">{matrix.high.text}</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left font-medium px-4 py-2">Element</th>
              <th className="text-left font-medium px-4 py-2">Low-Energy/Vague</th>
              <th className="text-left font-medium px-4 py-2">High-Energy/Clear</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {matrix.rows.map((r) => (
              <tr key={r.element}>
                <td className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">{r.element}</td>
                <td className="px-4 py-3 text-slate-600">{r.low}</td>
                <td className="px-4 py-3 text-slate-600">{r.high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function EngagementSteps({ steps }) {
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-3 rounded-lg bg-slate-50 p-3">
          <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-semibold">
            {i + 1}
          </span>
          <p className="text-sm text-slate-700">
            <strong className="text-slate-900">{s.title}</strong> — {s.detail}
          </p>
        </li>
      ))}
    </ol>
  )
}

function DualTrackTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            <th className="text-left font-medium px-4 py-2">The Leader Develops...</th>
            <th className="text-left font-medium px-4 py-2">...While the Team Simultaneously Builds</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.leader}>
              <td className="px-4 py-3 text-slate-700">{r.leader}</td>
              <td className="px-4 py-3 text-slate-700">{r.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ModuleBody({ module }) {
  if (!module) {
    return (
      <p className="text-center text-slate-400 italic py-10">
        This module hasn't been built yet.
      </p>
    )
  }
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-2">The "What to Say" Scripting Matrix</h2>
        <ScriptingMatrix matrix={module.scriptingMatrix} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Team Engagement Mechanics — Getting Them Speaking, Not Just Listening
        </h2>
        <EngagementSteps steps={module.engagementSteps} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Dual-Track Growth</h2>
        <DualTrackTable rows={module.dualTrack} />
      </div>
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <h3 className="text-sm font-semibold text-indigo-700 mb-1">The Compounding Effect</h3>
        <p className="text-sm text-slate-700">{module.compoundingEffect}</p>
      </div>
    </div>
  )
}

export default function Manual() {
  const { session } = useSession()
  const [activeIdx, setActiveIdx] = useState(0)

  if (session === undefined) return <p className="text-center text-slate-500">Loading...</p>
  if (session === null) return <Navigate to="/role" replace />

  const active = MODULES_ORDER[activeIdx]

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Leadership Training Manual</h1>
        <p className="text-slate-600 mt-2">
          Dual-track modules — every module develops the leader and the team at the same time.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {MODULES_ORDER.map((m, i) => (
          <button
            key={m ? m.id : `m${i + 1}`}
            onClick={() => setActiveIdx(i)}
            className={
              'rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ' +
              (i === activeIdx
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300')
            }
          >
            {m ? m.title : `Module ${i + 1}`}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6">
        {active && (
          <p className="text-sm text-slate-500 mb-6 italic">{active.subtitle}</p>
        )}
        <ModuleBody module={active} />
      </div>
    </div>
  )
}
