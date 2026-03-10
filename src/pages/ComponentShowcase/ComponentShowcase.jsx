import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Badge,
  IconBox,
  ProgressBar,
  Tooltip,
  Accordion,
  Tabs,
  AnimatedSection,
  Section,
  SectionTitle,
  Container,
} from "@/components";
import { Code, Smartphone, Cloud, Zap, Shield, Users } from "lucide-react";

/**
 * Component Showcase Page
 * Demonstrates all the new enhanced UI components
 *
 * Note: This is a demo page. You can delete it or use it as a reference.
 * To add to routing, import and add a route in router.jsx
 */
export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const accordionItems = [
    {
      title: "What is this showcase?",
      content:
        "This page demonstrates all the new enhanced UI components available in the project.",
    },
    {
      title: "How do I use these components?",
      content:
        "Import them from @/components and use them in your pages. Check QUICK_START.md for examples.",
    },
    {
      title: "Are these components responsive?",
      content:
        "Yes! All components are fully responsive and work great on mobile, tablet, and desktop.",
    },
  ];

  const tabs = [
    {
      label: "Overview",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Component Library Overview</h3>
          <p className="text-gray-600">
            This library includes buttons, cards, modals, forms, animations, and
            more. All components are built with Framer Motion for smooth
            animations and Tailwind CSS for styling.
          </p>
        </div>
      ),
    },
    {
      label: "Features",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Smooth animations with Framer Motion</li>
            <li>Fully responsive design</li>
            <li>Accessible components</li>
            <li>Easy to customize</li>
            <li>TypeScript ready</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Usage",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">How to Use</h3>
          <p className="text-gray-600">
            Import components from @/components and use them in your pages.
            Check the QUICK_START.md file for detailed examples and best
            practices.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <Section background="transparent" padding="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="gradient" size="lg" className="mb-4">
              New Components
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enhanced UI Components
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A collection of beautiful, animated, and accessible React
              components built with Framer Motion and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Docs
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section background="white">
        <SectionTitle subtitle="Multiple variants and sizes">
          Buttons
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>

            <div className="max-w-md mx-auto">
              <Button variant="primary" fullWidth>
                Full Width Button
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Cards Section */}
      <Section background="gradient">
        <SectionTitle subtitle="Hover effects and gradient backgrounds">
          Cards
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover>
              <CardBody>
                <h3 className="text-xl font-bold mb-2">Standard Card</h3>
                <p className="text-gray-600">A simple card with hover effect</p>
              </CardBody>
            </Card>

            <Card hover gradient>
              <CardBody>
                <h3 className="text-xl font-bold mb-2">Gradient Card</h3>
                <p className="text-gray-600">Card with gradient background</p>
              </CardBody>
            </Card>

            <Card hover>
              <CardHeader>
                <h3 className="text-xl font-bold">Card with Header</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Card with separate header section
                </p>
              </CardBody>
            </Card>
          </div>
        </AnimatedSection>
      </Section>

      {/* Icon Boxes Section */}
      <Section background="white">
        <SectionTitle subtitle="Perfect for feature highlights">
          Icon Boxes
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconBox
              icon={<Code />}
              title="Web Development"
              description="Modern web applications"
              variant="primary"
            />
            <IconBox
              icon={<Smartphone />}
              title="Mobile Apps"
              description="iOS and Android apps"
              variant="secondary"
            />
            <IconBox
              icon={<Cloud />}
              title="Cloud Solutions"
              description="Scalable infrastructure"
              variant="gradient"
            />
          </div>
        </AnimatedSection>
      </Section>

      {/* Form Inputs Section */}
      <Section background="gradient">
        <SectionTitle subtitle="Beautiful form components">
          Form Inputs
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <Card className="max-w-2xl mx-auto">
            <CardBody>
              <form className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Input label="Full Name" placeholder="John Doe" required />

                <Textarea
                  label="Message"
                  placeholder="Your message here..."
                  rows={4}
                />

                <Button variant="primary" fullWidth>
                  Submit Form
                </Button>
              </form>
            </CardBody>
          </Card>
        </AnimatedSection>
      </Section>

      {/* Badges Section */}
      <Section background="white">
        <SectionTitle subtitle="Labels and tags">Badges</SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="gradient" size="lg">
              Gradient
            </Badge>
          </div>
        </AnimatedSection>
      </Section>

      {/* Progress Bars Section */}
      <Section background="gradient">
        <SectionTitle subtitle="Animated progress indicators">
          Progress Bars
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="max-w-2xl mx-auto space-y-6">
            <ProgressBar value={75} label="Web Development" variant="primary" />
            <ProgressBar value={90} label="UI/UX Design" variant="success" />
            <ProgressBar
              value={60}
              label="Mobile Development"
              variant="gradient"
            />
          </div>
        </AnimatedSection>
      </Section>

      {/* Tabs Section */}
      <Section background="white">
        <SectionTitle subtitle="Organized content">Tabs</SectionTitle>

        <AnimatedSection animation="fadeUp">
          <Card className="max-w-3xl mx-auto">
            <CardBody>
              <Tabs tabs={tabs} />
            </CardBody>
          </Card>
        </AnimatedSection>
      </Section>

      {/* Accordion Section */}
      <Section background="gradient">
        <SectionTitle subtitle="Expandable content">Accordion</SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Modal Section */}
      <Section background="white">
        <SectionTitle subtitle="Smooth modal dialogs">Modal</SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              Open Modal
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* Tooltips Section */}
      <Section background="gradient">
        <SectionTitle subtitle="Helpful hover information">
          Tooltips
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="flex flex-wrap gap-8 justify-center">
            <Tooltip content="Tooltip on top" position="top">
              <Button variant="outline">Hover me (Top)</Button>
            </Tooltip>
            <Tooltip content="Tooltip on bottom" position="bottom">
              <Button variant="outline">Hover me (Bottom)</Button>
            </Tooltip>
            <Tooltip content="Tooltip on left" position="left">
              <Button variant="outline">Hover me (Left)</Button>
            </Tooltip>
            <Tooltip content="Tooltip on right" position="right">
              <Button variant="outline">Hover me (Right)</Button>
            </Tooltip>
          </div>
        </AnimatedSection>
      </Section>

      {/* Features Grid */}
      <Section background="white" padding="lg">
        <SectionTitle
          subtitle="Everything you need for modern web development"
          centered
        >
          Why Use These Components?
        </SectionTitle>

        <AnimatedSection animation="fadeUp">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <CardBody className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
                <p className="text-gray-600">
                  Optimized animations and lazy loading for blazing fast
                  performance
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessible</h3>
                <p className="text-gray-600">
                  WCAG compliant with keyboard navigation and screen reader
                  support
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">User Friendly</h3>
                <p className="text-gray-600">
                  Intuitive interfaces with smooth animations and
                  micro-interactions
                </p>
              </CardBody>
            </Card>
          </div>
        </AnimatedSection>
      </Section>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        size="md"
      >
        <ModalBody>
          <p className="text-gray-600 mb-4">
            This is an example modal with smooth animations. It includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Backdrop blur effect</li>
            <li>Smooth open/close animations</li>
            <li>Keyboard support (ESC to close)</li>
            <li>Body scroll lock</li>
            <li>Multiple size options</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
