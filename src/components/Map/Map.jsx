import styles from './Map.module.css'
export default function Map() {
  return (
    <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.01922982501!2d-80.10445710910031!3d25.939249925429834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sae!4v1723789322704!5m2!1sar!2sae" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  )
}
