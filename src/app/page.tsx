import SettingsTab from "./components/settingsTabs"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTab />

      <div className="mt-6 flex flex-col space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg text-zinc-900 font-medium">Personal info</h2>
            <span className="text-sm text-zinc-500">Update you photo an personal  details here.</span>  
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg font-semibold py-2 px-4 text-sm shadow-sm text-zinc-700 border border-zinc-300 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg font-semibold py-2 px-4 text-sm shadow-sm border border-violet-600  text-zinc-100 bg-violet-600 hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form id='settings' className="mt-6 flex w-full flex-col gap-5">
          <div className="grid grid-cols-form gap-3">
            <label htmlFor="firstName">
              Name
            </label>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </form>
      </div>
    </>
  )
}
