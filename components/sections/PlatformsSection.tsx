'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import PillButton from '@/components/shared/PillButton'

const platformList = [
  {
    num: '01',
    name: 'MY NURSERY',
    url: 'https://frontend-production-6662.up.railway.app/',
    modalDesc: 'My Nursery connects families with nurseries and early years providers. Explore childcare options, learn about different settings and find information to help you plan your child’s next step. For nursery businesses, the platform offers a dedicated place to introduce their services and connect with parents looking for care in their area.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Live',
    image: '/Image%20(9).png',
  },
  {
    num: '02',
    name: 'MY VET',
    url: 'https://test.my-vet.co.uk/',
    modalDesc: 'My Vet brings pet owners and veterinary businesses together in one specialist platform. Discover practices, explore the care they offer and learn more about the professionals who support your pet’s health. Veterinary businesses can introduce their services to an audience looking for relevant information and local care options.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Live',
    image: '/Image%20(10).png',
  },
  {
    num: '03',
    name: 'MY CARER',
    modalDesc: 'My Carer is being developed to connect people and families with care providers. The platform will focus on helping visitors explore care options, understand available support and learn about businesses in the sector. Register your interest to hear more about the launch and opportunities to introduce your care services.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(11).png',
  },
  {
    num: '04',
    name: 'MY TENANT',
    modalDesc: 'My Tenant is a forthcoming platform focused on the needs of tenants and the businesses that support them. It will bring together information about renting, moving and finding relevant services. Register your interest for launch updates and to learn how your business could connect with people navigating their rental journey.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(12).png',
  },
  {
    num: '05',
    name: 'MY LANDLORD',
    modalDesc: 'My Landlord is being built for property owners and businesses working across the rental sector. The platform will offer a dedicated space to explore property services and information relevant to managing rental homes. Register your interest to receive launch news and find out about opportunities to introduce your business.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(13).png',
  },
  {
    num: '06',
    name: 'MY SOLICITOR',
    modalDesc: 'My Solicitor is a forthcoming platform connecting people and businesses with legal service providers. Visitors will be able to learn about different areas of legal support and explore the firms that offer them. Register your interest for launch updates and opportunities to present your firm to a relevant audience.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(14).png',
  },
  {
    num: '07',
    name: 'MY ACCOUNTANT',
    modalDesc: 'My Accountant is being developed to bring individuals, businesses and accounting professionals together. The platform will focus on information and services around bookkeeping, accounts and business finances. Register your interest to follow the launch and discover how your practice could introduce its expertise to people looking for accounting support.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(15).png',
  },
  {
    num: '08',
    name: 'MY IMPORTER',
    modalDesc: 'My Importer is a forthcoming specialist platform for businesses involved in importing and international trade. It will provide a space to explore sector information and discover businesses offering relevant services. Register your interest for launch updates and to learn about opportunities to connect with the platform’s future audience.',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(16).png',
  },
]

export default function PlatformsSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<(typeof platformList)[number] | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!selectedPlatform) return
    const dialog = dialogRef.current
    dialog?.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [selectedPlatform])

  return (
    <section className="platforms" id="platforms">
      <img
        src="/Vector.png"
        alt=""
        aria-hidden="true"
        className="platforms-vector platforms-vector-tl"
      />
      <img
        src="/Vector (1).png"
        alt=""
        aria-hidden="true"
        className="platforms-vector platforms-vector-br"
      />
      <div className="container platforms-container">
        <div className="section-heading">
          <div>
            <p className="platforms-label">Our Platforms</p>
            <h2>
              Eleven Platforms. Eleven<br />
              Industries. One Media Group.
            </h2>
          </div>
          <div className="section-heading-right">
            <p>
              Explore our specialist platforms, each built to connect people with the businesses and professionals they need.
            </p>
            <PillButton>Our Platforms</PillButton>
          </div>
        </div>
        <div className="platform-grid">
          {platformList.map((item) => (
            <article className="platform-card" key={item.num}>
              <div className="card-top">
                <div className="card-header-left">
                  <span className="number-circle">{item.num}</span>
                  <div className="card-titles">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className={`platform-status ${item.status === 'Live' ? 'is-open' : 'is-soon'}`}
                  aria-label={`${item.name}: ${item.status === 'Live' ? 'Open' : 'Coming soon'}. View details`}
                  onClick={() => setSelectedPlatform(item)}
                >
                  <span className="platform-toggle-track" aria-hidden="true">
                    <span className="platform-toggle-thumb" />
                  </span>
                  <span>{item.status === 'Live' ? 'Open' : 'Coming Soon'}</span>
                </button>
              </div>
              <button
                type="button"
                className="card-image-wrap platform-image-button"
                aria-label={`View ${item.name} details`}
                onClick={() => setSelectedPlatform(item)}
              >
                <img src={item.image} alt={`${item.name} platform`} loading="lazy" />
              </button>
            </article>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="platform-dialog"
        aria-labelledby="platform-dialog-title"
        aria-describedby="platform-dialog-description"
        onCancel={() => setSelectedPlatform(null)}
        onClose={() => setSelectedPlatform(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect()
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
              setSelectedPlatform(null)
            }
          }
        }}
      >
        {selectedPlatform && (
          <>
            <button type="button" className="platform-dialog-close" aria-label="Close platform details" onClick={() => setSelectedPlatform(null)}>
              <X size={22} />
            </button>
            <div className="platform-dialog-header">
              <h2 id="platform-dialog-title">{selectedPlatform.name}</h2>
              <span className={`platform-status platform-dialog-status ${selectedPlatform.status === 'Live' ? 'is-open' : 'is-soon'}`}>
                <span className="platform-toggle-track" aria-hidden="true">
                  <span className="platform-toggle-thumb" />
                </span>
                <span>{selectedPlatform.status === 'Live' ? 'Open' : 'Coming Soon'}</span>
              </span>
            </div>
            <img className="platform-dialog-image" src={selectedPlatform.image} alt={`${selectedPlatform.name} platform`} />
            <p id="platform-dialog-description">{selectedPlatform.modalDesc}</p>
            <div onClick={() => setSelectedPlatform(null)}>
              <PillButton href={selectedPlatform.url ?? '#contact'}>
                {selectedPlatform.url ? 'Visit Website' : 'Register Your Interest'}
              </PillButton>
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}
