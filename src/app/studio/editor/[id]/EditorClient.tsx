'use client';

import React, { useState } from 'react';
import styles from './editor.module.css';

export default function EditorClient({ project }: { project: any }) {
  const [device, setDevice] = useState<'desktop' | 'laptop' | 'tablet' | 'mobile'>('desktop');

  // SVG Icons
  const MonitorIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  );
  const LaptopIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
  );
  const TabletIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  );
  const MobileIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  );
  
  const FolderIcon = () => (
    <svg className={styles.treeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  );
  const LayoutIcon = () => (
    <svg className={styles.treeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
  );
  const ComponentIcon = () => (
    <svg className={styles.treeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  );
  const SettingsIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
  );

  return (
    <div className={styles.container}>
      {/* Top Toolbar */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 24, height: 24, borderRadius: 4, background: 'linear-gradient(135deg, #0070f3, #f81ce5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2z"/></svg>
            </div>
            <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '-0.5px' }}>Locizsa Studio</span>
          </div>
          <span style={{ color: '#333' }}>/</span>
          <span>{project?.name || 'Project'}</span>
        </div>

        <div className={styles.headerCenter}>
          <button 
            className={`${styles.deviceBtn} ${device === 'desktop' ? styles.active : ''}`}
            onClick={() => setDevice('desktop')}
          >
            <MonitorIcon />
          </button>
          <button 
            className={`${styles.deviceBtn} ${device === 'laptop' ? styles.active : ''}`}
            onClick={() => setDevice('laptop')}
          >
            <LaptopIcon />
          </button>
          <button 
            className={`${styles.deviceBtn} ${device === 'tablet' ? styles.active : ''}`}
            onClick={() => setDevice('tablet')}
          >
            <TabletIcon />
          </button>
          <button 
            className={`${styles.deviceBtn} ${device === 'mobile' ? styles.active : ''}`}
            onClick={() => setDevice('mobile')}
          >
            <MobileIcon />
          </button>
        </div>

        <div className={styles.headerRight}>
          <button style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <SettingsIcon />
          </button>
          <button className={styles.exportBtn}>
            Export Code
          </button>
        </div>
      </div>

      <div className={styles.main}>
        {/* Left Panel - Explorer */}
        <div className={styles.leftPanel}>
          <div className={styles.panelHeader}>Explorer</div>
          
          <div className={styles.treeView}>
            {/* Pages */}
            <div className={styles.treeItem}>
              <FolderIcon /> Pages
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent} ${styles.active}`}>
              <LayoutIcon /> Home
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <LayoutIcon /> About
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <LayoutIcon /> Contact
            </div>

            {/* Layouts */}
            <div className={styles.treeItem} style={{ marginTop: 16 }}>
              <FolderIcon /> Layouts
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <LayoutIcon /> Main Layout
            </div>

            {/* Components */}
            <div className={styles.treeItem} style={{ marginTop: 16 }}>
              <FolderIcon /> Components
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <ComponentIcon /> Hero Section
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <ComponentIcon /> Navbar
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <ComponentIcon /> Footer
            </div>
            
            {/* Elements inside active view */}
            <div className={styles.panelHeader} style={{ marginTop: 24, borderTop: '1px solid #1a1a1a' }}>
              Layers - Home
            </div>
            <div className={styles.treeItem}>
              <svg className={styles.treeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
              Body
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <ComponentIcon /> Navbar
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent}`}>
              <svg className={styles.treeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
              Section
            </div>
            <div className={`${styles.treeItem} ${styles.treeItemIndent2} ${styles.active}`}>
              <svg className={styles.treeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
              Heading
            </div>
          </div>
        </div>

        {/* Center Canvas */}
        <div className={styles.canvas}>
          <div className={styles.canvasInner}>
            <div className={styles.dropZone}>
              <svg className={styles.dropIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#888' }}>Drop components here</div>
              <div style={{ fontSize: 13, color: '#555' }}>Select an element from the left panel or drag a new one.</div>
            </div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className={styles.rightPanel}>
          {/* Design Section */}
          <div className={styles.propSection}>
            <div className={styles.propHeader}>
              <span>Design</span>
              <span style={{ color: '#555', fontSize: 11, fontWeight: 'normal' }}>Heading</span>
            </div>
            
            {/* Layout */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>Layout</div>
              <div className={styles.grid4}>
                <button className={`${styles.propIconBtn} ${styles.active}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                </button>
                <button className={styles.propIconBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line></svg>
                </button>
                <button className={styles.propIconBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="3" x2="12" y2="21"></line></svg>
                </button>
                <button className={styles.propIconBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </button>
              </div>
            </div>

            {/* Spacing */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>Spacing</div>
              <div className={styles.propRow}>
                <div className={styles.propLabel}>Margin</div>
                <div className={styles.propInputGroup}>
                  <input type="text" className={styles.propInput} defaultValue="0" />
                  <input type="text" className={styles.propInput} defaultValue="auto" />
                  <input type="text" className={styles.propInput} defaultValue="0" />
                  <input type="text" className={styles.propInput} defaultValue="auto" />
                </div>
              </div>
              <div className={styles.propRow}>
                <div className={styles.propLabel}>Padding</div>
                <div className={styles.propInputGroup}>
                  <input type="text" className={styles.propInput} defaultValue="16" />
                  <input type="text" className={styles.propInput} defaultValue="24" />
                  <input type="text" className={styles.propInput} defaultValue="16" />
                  <input type="text" className={styles.propInput} defaultValue="24" />
                </div>
              </div>
            </div>
            
            {/* Size */}
            <div>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>Size</div>
              <div className={styles.grid2}>
                <div className={styles.propRow}>
                  <div className={styles.propLabel} style={{ flex: 'none', width: 16 }}>W</div>
                  <input type="text" className={styles.propInput} defaultValue="100%" />
                </div>
                <div className={styles.propRow}>
                  <div className={styles.propLabel} style={{ flex: 'none', width: 16 }}>H</div>
                  <input type="text" className={styles.propInput} defaultValue="Auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className={styles.propSection}>
            <div className={styles.propHeader}>Typography</div>
            
            <div className={styles.propRow}>
              <div className={styles.propLabel}>Font</div>
              <div className={styles.propInputGroup}>
                <select className={styles.propInput} style={{ appearance: 'none' }} defaultValue="inter">
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="outfit">Outfit</option>
                </select>
              </div>
            </div>

            <div className={styles.propRow}>
              <div className={styles.propLabel}>Weight</div>
              <div className={styles.propInputGroup}>
                <select className={styles.propInput} style={{ appearance: 'none' }} defaultValue="600">
                  <option value="400">Regular 400</option>
                  <option value="500">Medium 500</option>
                  <option value="600">SemiBold 600</option>
                  <option value="700">Bold 700</option>
                </select>
              </div>
            </div>

            <div className={styles.grid2} style={{ marginTop: 12 }}>
              <div className={styles.propRow}>
                <div className={styles.propLabel} style={{ flex: 'none', width: 32 }}>Size</div>
                <input type="text" className={styles.propInput} defaultValue="32px" />
              </div>
              <div className={styles.propRow}>
                <div className={styles.propLabel} style={{ flex: 'none', width: 32 }}>Line</div>
                <input type="text" className={styles.propInput} defaultValue="1.2" />
              </div>
            </div>

            <div className={styles.propRow} style={{ marginTop: 8 }}>
              <div className={styles.propLabel}>Color</div>
              <div className={styles.propInputGroup} style={{ gap: 8 }}>
                <div className={styles.propColorBox} style={{ backgroundColor: '#ffffff' }}></div>
                <input type="text" className={styles.propInput} defaultValue="FFFFFF" />
                <div style={{ fontSize: 11, color: '#666' }}>100%</div>
              </div>
            </div>
            
            <div className={styles.grid4} style={{ marginTop: 16 }}>
              <button className={styles.propIconBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="15" y1="12" x2="3" y2="12"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
              </button>
              <button className={`${styles.propIconBtn} ${styles.active}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="12" x2="3" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
              </button>
              <button className={styles.propIconBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="19" y1="12" x2="5" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
              </button>
              <button className={styles.propIconBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="12" x2="3" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* Background Section */}
          <div className={styles.propSection}>
            <div className={styles.propHeader}>Background</div>
            
            <div className={styles.propRow}>
              <div className={styles.propLabel}>Fill</div>
              <div className={styles.propInputGroup} style={{ gap: 8 }}>
                <div className={styles.propColorBox} style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(-45deg, #222 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222 75%), linear-gradient(-45deg, transparent 75%, #222 75%)', backgroundSize: '8px 8px', backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px' }}></div>
                <input type="text" className={styles.propInput} defaultValue="None" />
                <button className={styles.propIconBtn} style={{ padding: 4 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Border & Effects */}
          <div className={styles.propSection}>
            <div className={styles.propHeader}>Effects</div>
            
            <div className={styles.propRow}>
              <div className={styles.propLabel}>Radius</div>
              <div className={styles.propInputGroup}>
                <input type="text" className={styles.propInput} defaultValue="0" />
              </div>
            </div>

            <div className={styles.propRow} style={{ marginTop: 12 }}>
              <div className={styles.propLabel}>Shadow</div>
              <div className={styles.propInputGroup} style={{ gap: 8 }}>
                <input type="text" className={styles.propInput} defaultValue="None" />
                <button className={styles.propIconBtn} style={{ padding: 4 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
