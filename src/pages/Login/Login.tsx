import React, { useState, useRef, memo, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonInput, IonButton, IonItem } from '@ionic/react';
import { AppScreens } from '../AppScreens/AppScreens';
import { useCalendarStore } from '../../store';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import styles from "./Login.module.css";
import { Button } from '../../components/Button/Button';

const setLoggedInSelector = (state: any) => state.setLoggedIn;

export const Login = memo(() => {
  const setLoggedIn = useCalendarStore(setLoggedInSelector);
  const el = useRef<HTMLIonContentElement>(null);

  const goToApp = useCallback(() => {
    el.current?.closest('ion-nav')?.push(() => <AppScreens />);
  }, []);

  const login = useCallback(() => {
    setLoggedIn(true);
    goToApp();
  }, [goToApp, setLoggedIn]);

  const [selectedTab, setSelectedTab] = useState('login');
  const [emailAUT, setEmailAUT] = useState('');
  const [passwordAUT, setPasswordAUT] = useState('');
  const [emailREG, setEmailREG] = useState('');
  const [passwordREG, setPasswordREG] = useState('');
  const [confirmPasswordREG, setConfirmPasswordREG] = useState('');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleLogin = () => {
    
  };

  const handleRegister = () => {
    // Обработка регистрации
  };

  return (
    <IonPage ref={el}>
      <div className={styles.content}>
      <IonContent className="ion-padding">
        <div className='text'>
          <h2>Привет!</h2>
          <p>С возвращением в SunMood 💛</p>
        </div>
        <IonToolbar mode="ios" className={styles.segmentsToolbar}>
          <IonSegment 
            value={selectedTab}
            onIonChange={(e) => handleTabChange(e.detail.value!)}
            mode="ios">
            <IonSegmentButton
              value="login" 
              className={styles.segmentButton}>
              <IonLabel>Авторизация</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton 
              value="register"
              className={styles.segmentButton}>
              <IonLabel>Регистрация</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {selectedTab === 'login' && (
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor="emailAUT">Электронная почта</label>
              <div className={styles.inputIcon}>
                <IonIcon icon = {mailOutline}/>
              </div>
              <input
                id="emailAUT"
                type="email"
                className={styles.input}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={emailAUT}
                onChange={(e) => setEmailAUT(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="passwordAUT">Пароль</label>
              <div className={styles.inputIcon}>
                <IonIcon icon = {lockClosedOutline}/>
              </div>
              <input
                id="passwordAUT"
                type="password"
                className={styles.input}
                value={passwordAUT}
                onChange={(e) => setPasswordAUT(e.target.value)}
              />
            </div>
            <Button className={styles.forgotButton}>Забыли пароль?</Button>
            <Button className={styles.submitButton} onClick={login}>
              Войти
            </Button>      
          </div>
        )}

        {selectedTab === 'register' && (
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor="emailREG">Электронная почта</label>
              <div className={styles.inputIcon}>
                <IonIcon icon = {mailOutline}/>
              </div>
              <input
                id="emailREG"
                type="email"
                className={styles.input}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={emailREG}
                onChange={(e) => setEmailREG(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="passwordREG">Пароль</label>
              <div className={styles.inputIcon}>
                <IonIcon icon = {lockClosedOutline}/>
              </div>
              <input
                id="passwordREG"
                type="password"
                className={styles.input}
                value={passwordREG}
                onChange={(e) => setPasswordREG(e.target.value)}
              />
            </div>
            
            <div className={styles.inputContainer}>
              <label htmlFor="confirmPasswordREG">Повторите пароль</label>
              <div className={styles.inputIcon}>
                <IonIcon icon = {lockClosedOutline}/>
              </div>
              <input
                id="confirmPasswordREG"
                type="password"
                className={styles.input}
                value={confirmPasswordREG}
                onChange={(e) => setConfirmPasswordREG(e.target.value)}
              />
            </div>
            <Button className={styles.submitButton} onClick={handleLogin}>
              Войти
            </Button>
          </div>
        )}
      </IonContent>
      </div>
    </IonPage>
  );
});

export default Login;
