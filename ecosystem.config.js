module.exports = {
  apps: [{
    name: 'tx-tracker',
    script: 'index.js',
    cwd: __dirname,
    
    // Auto-restart on crash
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 5000,
    
    // Logging
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    merge_logs: true,
    
    // Memory limit — restart if exceeds 512MB
    max_memory_restart: '512M',
    
    // Environment
    env: {
      NODE_ENV: 'production',
    },
  }],
};
