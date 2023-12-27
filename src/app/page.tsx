import { Mail, UploadCloud, User } from "lucide-react"
import { SettingsTab } from "../components/settingsTabs"
import * as Input from '@/components/input'
import * as FileInput from '@/components/Form/fileInput'

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

        <form id='settings' className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue='kleber'/>
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue='Fernandes'/>
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>
            
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" defaultValue='ch4r4d4@gmail.com'/>
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">This will be displayed on your profile.</span>
            </label>
    
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root >
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700"
            >
              Role
            </label>
            
            <Input.Root>
              <Input.Control id="role" defaultValue='CTO'/>
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Bio
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">Write a short introduction.</span>
            </label>
            
            <div>

            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">Share a few snippets of your work.</span>
            </label>
            
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
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
        </form>

      </div>
    </>
  )
}
