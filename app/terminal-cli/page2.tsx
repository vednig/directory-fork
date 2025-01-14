'use client'
import dynamic from 'next/dynamic'

import { useState, useEffect } from 'react'

import { parseTerminalData, Terminal } from '../../utils/parseTerminalData'
 
const TerminalEmulator = dynamic(() => import('../../components/TerminalEmulator'), {
  ssr: false,
})

const terminalData = `AbsoluteTelnet	Character	Telnet, SSH 1 and 2, TAPI Dialup and direct COM port		Windows	AbsoluteTelnet is a commercial software terminal client for Windows
Alacritty	Character	Local	X11, Wayland	Unix-based, Windows	Lightweight, GPU accelerated terminal emulator
AlphaCom	Character	Telnet, SSH, and RS-232/modem		Windows	
CBterm/C64	Character	Serial port		Commodore 64	
C-Kermit for Windows and OS/2	Character	SSH, Telnet, rlogin, Local, raw socket connection, Serial port, TAPI and direct Dialup, Named Pipe, Pathworks32 LAT and CTERM[1]		Windows, IBM OS/2	Formerly Kermit 95,[2] successor of the Columbia.edu Kermit Project.
ConEmu	Character	Local		Windows	Local terminal window that can host console application either for WinAPI or Unix PTY
fshell	Character	Local, Telnet	Avkon, Qt	Symbian S60	fshell is a free and open-source terminal emulator for Symbian 9.1-9.4, developed by Accenture.[3] Has a desktop app, Muxcons, to remotely control smartphone throw fshell.[4][5]
GNOME Terminal	Character	Local	X11, Wayland	Unix-based	Default terminal for GNOME with native Wayland support
guake	Character	Local	X11, Wayland	Unix-based	Drop-down terminal for GNOME
HyperACCESS	Character	Serial port		Windows	
HyperTerminal	Character	Serial port		Windows XP or earlier	
IBM Personal Communications	Block	tn3270, tn5250		Windows	3270 emulator, 5250 emulator
iTerm2	Character	Local		macOS	Open-source terminal specifically for macOS
kitty	Character	Local	X11, Wayland, Quartz	Unix-based, macOS	GPU accelerated, with tabs, tiling, image viewing, interactive unicode character input
konsole	Character	Local	X11, Wayland	Unix-based	Default terminal for KDE. GPU accelerated, with tabs, tiling, image viewing
Linux console	Character	Local	CLI	Linux	Implements a subset of the VT102 and ECMA-48/ISO 6429/ANSI X3.64 escape sequences
MacTerminal	Character	Serial port		Classic Mac OS	
MacWise	Character	Serial port		Classic Mac OS, macOS	
mintty	Character	Local		Windows	Used for Cygwin, MSYS2, as well as the Windows port of Git
NComm	Character	Serial port		Amiga	
OpenTTY	Character	Local	LCDUI	J2ME	OpenTTY is a free and open-source terminal emulator for feature phones and smartphones with J2ME support.[6]
PComm	Character	Serial port, Telnet ?		Windows	Moxa Inc free terminal emulator for Windows
PuTTY	Character	Serial port, Telnet, rlogin, SSH, and raw socket connection		Windows, macOS, ReactOS, Linux, Symbian S60[7]	PuTTY is a free and open-source terminal emulator, serial console and file transfer application.
Qmodem Pro	Character	Serial port		Windows	Terminal emulator for MS-DOS and WIndows 95 (discontinued since 1997)
Red Ryder	Character	Serial port		Classic Mac OS	Terminal emulator for Macintosh (discontinued since 1989)
RUMBA	Character, block	Serial port, Telnet, SSH, tn3270, tn5250, SNA		Windows	Rumba and allows users to connect to legacy systems (typically a mainframe)
rxvt	Character	Local	X11, Wayland	Unix-based	Rxvt is a terminal emulator for the X Window System, and in the form of a Cygwin port, for Windows
SecureCRT	Character	Telnet, SSH		macOS, Windows	SecureCRT is a commercial terminal emulator for Linux, macOS and Windows
SyncTERM	Character	raw TCP socket, rlogin, SSH, Serial port, Telnet	CLI (curses), SDL, X11	Linux, macOS, NetBSD, OpenBSD, Windows	Terminal program for Windows, Linux, OpenBSD, NetBSD, Mac OS X, and FreeBSD
Telix	Character	Serial port		MS-DOS	Terminal emulator for MS-DOS (discontinued since 1997)
Tera Term	Character	Serial port, Telnet, xmodem and SSH 1 & 2		Windows	Tera Term is an open-source, free, software terminal emulator for Windows
Terminal	Character	Local		macOS	This is the default terminal application on macOS
Terminate	Character	Serial port		MS-DOS	Terminal emulator for MS-DOS (discontinued since 1992)
Terminator	Character		X11, Wayland	Unix-based	Written in Java with many novel or experimental features
Termux	Character	Local		Android	
Tilda	Character	Local	X11, Wayland	Unix-based	A GTK drop-down terminal
Tilix	Character	Local	X11, Wayland	Unix-based	GTK3 tiling terminal emulator
TN3270 Plus	Block and character	tn3270, tn5250,Telnet		Windows	TN3270-Plus is a terminal emulator for Windows
Warp	Character	Local		Linux, macOS	terminal with modern IDE, AI assistance, and collaborative command sharing
WezTerm	Character	Local	X11, Wayland	Unix-based, Windows	terminal emulator implemented in Rust
Windows Console	Character	Local		Windows	Windows command line terminal
Windows Terminal	Character	Local		Windows	Default terminal on Windows
x3270	Block	tn3270		Multi-platform	x3270 is an open-source terminal emulator available for macOS, Linux and Windows
xfce4-terminal	Character	Local	X11, Wayland	Unix-based	Default terminal for Xfce with drop-down support
xterm	Character	Local	X11, Wayland	Unix-based	xterm is the standard terminal for X11; default terminal when X11.app starts on macOS
ZOC	Character	Serial port, Telnet, SSH, ISDN, TAPI, Rlogin		Windows, IBM OS/2, macOS	ZOC is a commercial terminal emulator for Windows, macOS and OS/S
ZTerm	Character	Serial line		macOS, Classic Mac OS	ZTerm is a shareware serial terminal emulator for macOS`

export default function TerminalCLI() {
  const [terminals, setTerminals] = useState<Terminal[]>([])

  useEffect(() => {
    setTerminals(parseTerminalData(terminalData))
  }, [])

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
        Terminal Directory CLI
      </h1>
      <TerminalEmulator terminals={terminals} />
    </main>
  )
}

