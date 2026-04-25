'use client'

import { useState } from "react"
import Button from "@/src/shared/ui/Button"
import Modal from "@/src/shared/ui/Modal"
import { useTranslations } from "next-intl"
import CustomInput from "../ui/Input"

export default function ContactModalTrigger() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [appeal, setAppeal] = useState('')
  const t = useTranslations("contacts")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!phone || !email) {
      alert(t("fillAllFields"))
      return
    }


    setOpen(true)

    setPhone('')
    setEmail('')
    setAppeal('')
  }

  return (
    <>
      <form className="mt-8 sm:mt-10" onSubmit={handleSubmit}>
        <div className="mt-6 sm:mt-10">
          <CustomInput
            label=""
            type="tel"
            placeholder={t("phone")}
            name="Phone"
            
            required
            value={phone}
            onChange={(e) => {let value = e.target.value; value = value.replace(/[^\d+]/g, ""); if (value.includes("+")) { value = "+" + value.replace(/\+/g, "");}
                setPhone(value);
              }}  

/>
        </div>

        <div className="mt-6 sm:mt-10">
          <CustomInput
            label=""
            type="email"
            placeholder="Email"
            name="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-8 sm:mt-12">
          <label htmlFor="appeal" className="mb-2 text-[#BDBDBD] font-medium">
            {t("appeal")}
          </label>
          <textarea
            id="appeal"
            name="appeal"
            className="
              h-[120px] sm:h-[150px]
              border border-gray-300
              px-4 py-3
              outline-none
              resize-none
              focus:border-[#E0B08B]
              focus:ring-2 focus:ring-[#E0B08B] focus:ring-opacity-50
              transition
              text-gray-300
              bg-transparent
            "
            value={appeal}
            onChange={(e) => setAppeal(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="mt-8 sm:mt-10 w-full max-w-[570px]"
        >
          {t("btn")}
        </Button>
      </form>

      <Modal isOpen={open} onClose={() => setOpen(false)}/>
    </>
  )
}
