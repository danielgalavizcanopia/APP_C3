import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { lib } from 'crypto-js';
import { Breadcrumb } from 'primeng/breadcrumb';
import { ColorPicker } from 'primeng/colorpicker';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Tooltip } from 'primeng/tooltip';

const AppTheme = definePreset(Aura, {
    components: {
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: 'white',
                        color: "#5C5C5C",
                        title: {
                            fontSize: "16px",
                            fontWeight: "700",
                        },
                    },
                },
            }
        },
        button: {
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: '#00946E',
                        },
                        secondary: {
                            background: '#3DB87B',
                            color: "white",

                            hover: {
                                background: '#00946E',
                                color: "white",
                            },
                            active: {
                                background: '#3DB87B',
                                color: "white",
                            }
                        },
                        success: {
                            background: '#21B6A8',
                            color: "white",

                            hover: {
                                background: '#51d3c6ff',
                                color: "white",
                            },
                            active: {
                                background: '#2FBCAE',
                                color: "white",
                            }
                        },
                        warn: {
                            background: '#D87610',
                        },
                        danger: {
                            background: '#D1410D',
                        },
                    },
                },
            }
        },
        floatlabel: {
            colorScheme: {
                light: {
                    root: {
                        color: '#999999',
                        over: {
                            active: {
                                top: '-0.80rem',
                            }
                        }
                    }
                }
            }
        },
        breadcrumb: {
            colorScheme: {
                light: {
                    root: {
                        background: 'transparent',
                        padding: '8px',
                    }
                }
            }
        },
        menu: {
            colorScheme: {
                light: {
                    root: {
                        borderColor: '0px',
                        item: {
                            color: '#163029',
                            focus: {
                                background: '#E3F0EA',
                            }
                        },
                        submenu: {
                            label: {
                                color: '#163029',
                                fontSize: '12px',
                                fontWeight: '700',
                            }
                        },
                    }
                }
            }
        },
        drawer: {
            colorScheme: {
                light: {
                    root: {
                        color: '#163029',
                        header: {
                            padding: '10px',
                        },
                        content: {
                            padding: '0px 0px 10px 10px;',
                        },

                    },

                }
            }

        },
        tooltip: {
            colorScheme: {
                light: {
                    root: {
                        background: 'rgba(255, 255, 255, 0.7)',
                        color: "#163029",
                    },
                },
            }
        },
        message: {
            colorScheme: {
                light: {
                    root: {
                        borderColor: "none",
                        text: {
                            fontSize: '12px',
                        },
                        success: {
                            color: '#088F83',
                        },
                        warn: {
                            color: '#D87610',
                            background: '#f5d6b5',
                            borderColor: '#D87610',
                        },
                        error: {
                            color: '#D1410D',
                        },

                    }
                }
            }
        },
        menubar: {
            colorScheme: {
                light: {
                    root: {
                        padding: '16px 32px',
                        background: "#163029",
                        borderRadius: '0px',
                        borderColor: 'none',
                        item: {
                            color: 'white',
                        }

                    }
                }
            }
        },

        divider: {
            colorScheme: {
                light: {
                    root: {
                        horizontal: {
                            margin: '4px',
                        }
                    }
                }
            }

        },

        dialog: {
            colorScheme: {
                light: {
                    root: {
                        header: {
                            padding: '16px 16px 0px 16px'
                        },
                        content: {
                            padding: '16px'
                        }
                    }
                }
            }
        },
        datepicker: {
            colorScheme: {
                light: {
                    root: {
                        with: '100% !important'
                    }
                }
            }
        },

        datatable: {
            colorScheme: {
                light: {
                    root: {
                        header: {
                            cell: {
                                background: " #E3F0EA",
                            }
                        }
                    }
                }
            }
        },

        tabs: {
            colorScheme: {
                light: {
                    root: {
                        active: {
                            bar: {
                                background: "#3DB87B",
                                height: "3px",
                            }
                        },
                        tablist: {
                            background: "transparent",

                        },
                        tab: {

                            active: {
                                color: "#163029",
                            }
                        },
                        tabpanel: {
                            background: "transparent",
                        }
                    }
                }
            }

        }

    }
}

);

export default AppTheme