import Image from 'next/image'

export function EchegarayMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.046648610308!2d-4.421492448327992!3d36.72144087986667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7955ef2b4d5%3A0x9a94acd97d92b3a3!2sTeatro%20Echegaray!5e0!3m2!1sen!2sno!4v1652097737090!5m2!1sen!2sno"
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute left-0 top-0 h-full w-full"
    ></iframe>
  )
}
