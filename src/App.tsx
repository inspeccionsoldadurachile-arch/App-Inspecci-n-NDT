import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { CertificatesScreen } from './components/screens/CertificatesScreen';
import { TallerScreen } from './components/screens/TallerScreen';
import { AprenderScreen } from './components/screens/AprenderScreen';
import { RutaScreen } from './components/screens/RutaScreen';
import { QrCredentialModal } from './components/modals/QrCredentialModal';
import { SafetyPassModal } from './components/modals/SafetyPassModal';
import { LogbookModal } from './components/modals/LogbookModal';
import { CertificateDetailModal } from './components/modals/CertificateDetailModal';
import { BadgeDetailModal } from './components/modals/BadgeDetailModal';
import { EditProfileModal } from './components/modals/EditProfileModal';
import {
  INITIAL_PROFILE,
  INITIAL_CERTIFICATES,
  INITIAL_LOGBOOK,
  INITIAL_BADGES
} from './data/mockData';
import { ScreenTab, Certificate, Badge, LogbookEntry, InspectorProfile } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ScreenTab>('certif');
  const [profile, setProfile] = useState<InspectorProfile>(INITIAL_PROFILE);
  const [certificates, setCertificates] = useState<Certificate[]>(INITIAL_CERTIFICATES);
  const [logbook, setLogbook] = useState<LogbookEntry[]>(INITIAL_LOGBOOK);
  const [badges, setBadges] = useState<Badge[]>(INITIAL_BADGES);

  // Modals state
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isSafetyPassModalOpen, setIsSafetyPassModalOpen] = useState(false);
  const [isLogbookModalOpen, setIsLogbookModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  // Toast notification for user actions & XP
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleEarnXp = (amount: number, reason: string) => {
    setProfile((prev) => ({
      ...prev,
      xp: prev.xp + amount
    }));
    showToast(`+${amount} XP: ${reason}`);
  };

  const handleAddLogbookEntry = (newEntry: Omit<LogbookEntry, 'id'>) => {
    const entry: LogbookEntry = {
      ...newEntry,
      id: `log-${Date.now()}`
    };
    setLogbook([entry, ...logbook]);
    setProfile((prev) => ({
      ...prev,
      hoursPractica: Math.round((prev.hoursPractica + newEntry.hours) * 10) / 10,
      hoursWeekChange: Math.round((prev.hoursWeekChange + newEntry.hours) * 10) / 10,
      xp: prev.xp + Math.round(newEntry.hours * 10)
    }));
    showToast(`Jornada registrada: +${newEntry.hours} hrs añadidas a tu récord`);
  };

  const handleUpdateProfile = (updated: Partial<InspectorProfile>) => {
    setProfile((prev) => ({
      ...prev,
      ...updated
    }));
    showToast('Perfil de inspector actualizado correctamente');
  };

  const totalLogHours = logbook.reduce((sum, item) => sum + item.hours, 0);

  return (
    <div className="bg-[#081423] text-[#d7e3f9] font-['Montserrat',sans-serif] min-h-screen flex flex-col selection:bg-[#ff6b00] selection:text-white">
      {/* Top Header */}
      <Header
        profile={profile}
        onOpenProfile={() => setIsEditProfileModalOpen(true)}
        onOpenStreakInfo={() => showToast(`Racha activa: ${profile.streakDays} días consecutivos de simulacro!`)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-[76px] pb-24 bg-[#081423] min-h-screen">
        {currentTab === 'certif' && (
          <CertificatesScreen
            profile={profile}
            certificates={certificates}
            logbook={logbook}
            badges={badges}
            onOpenQr={() => setIsQrModalOpen(true)}
            onOpenSafetyPass={() => setIsSafetyPassModalOpen(true)}
            onOpenLogbook={() => setIsLogbookModalOpen(true)}
            onOpenEditProfile={() => setIsEditProfileModalOpen(true)}
            onSelectCertificate={(cert) => setSelectedCertificate(cert)}
            onSelectBadge={(badge) => setSelectedBadge(badge)}
          />
        )}

        {currentTab === 'taller' && (
          <TallerScreen onEarnXp={handleEarnXp} />
        )}

        {currentTab === 'aprender' && (
          <AprenderScreen onEarnXp={handleEarnXp} />
        )}

        {currentTab === 'ruta' && (
          <RutaScreen profile={profile} totalLogHours={totalLogHours} />
        )}
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals */}
      <QrCredentialModal
        profile={profile}
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      <SafetyPassModal
        profile={profile}
        isOpen={isSafetyPassModalOpen}
        onClose={() => setIsSafetyPassModalOpen(false)}
      />

      <LogbookModal
        entries={logbook}
        totalHours={totalLogHours}
        isOpen={isLogbookModalOpen}
        onClose={() => setIsLogbookModalOpen(false)}
        onAddEntry={handleAddLogbookEntry}
      />

      <CertificateDetailModal
        certificate={selectedCertificate}
        profile={profile}
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <BadgeDetailModal
        badge={selectedBadge}
        isOpen={!!selectedBadge}
        onClose={() => setSelectedBadge(null)}
      />

      <EditProfileModal
        profile={profile}
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSave={handleUpdateProfile}
      />

      {/* Floating Industrial Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] px-4 py-2.5 bg-[#0d1e33] border border-[#ff6b00] rounded-lg shadow-[0_4px_20px_rgba(255,107,0,0.35)] flex items-center gap-2.5 text-xs text-white animate-bounce">
          <span className="material-symbols-outlined text-[18px] text-[#ff6b00]">notifications_active</span>
          <span className="font-semibold text-[11px] flex-1">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-[#9db4d4] hover:text-white"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
          </button>
        </div>
      )}
    </div>
  );
}
