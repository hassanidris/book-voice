"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, ImageIcon } from "lucide-react";
import { UploadSchema, BookUploadFormValues } from "@/lib/zod";
import {
  ACCEPTED_PDF_TYPES,
  ACCEPTED_IMAGE_TYPES,
  DEFAULT_VOICE,
} from "@/lib/constants";
import FileUploader from "./FileUploader";
import VoiceSelector from "./VoiceSelector";
import LoadingOverlay from "./LoadingOverlay";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<BookUploadFormValues>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      title: "",
      author: "",
      persona: DEFAULT_VOICE,
      //It is voice in the tutorial
      pdfFile: undefined,
      coverImage: undefined,
    },
  });

  const onSubmit = async (data: BookUploadFormValues) => {
    setIsSubmitting(true);

    try {
      // TODO: replace with real upload + synthesis logic
      console.log("Submitting book", data);
      await new Promise((r) => setTimeout(r, 1400));
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      {isSubmitting && <LoadingOverlay />}

      <div className="new-book-wrapper">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* 1. PDF File Upload */}
          <FileUploader
            control={form.control}
            name="pdfFile"
            label="Upload Book PDF"
            acceptTypes={ACCEPTED_PDF_TYPES}
            icon={Upload}
            placeholder="Click to upload PDF"
            hint="PDF file (max 50MB)"
            disabled={isSubmitting}
          />

          {/* 2. Cover Image Upload */}
          <FileUploader
            control={form.control}
            name="coverImage"
            label="Upload Book Cover Image"
            acceptTypes={ACCEPTED_IMAGE_TYPES}
            icon={ImageIcon}
            placeholder="Click to upload cover image"
            hint="Leave empty to auto-generate from PDF"
            disabled={isSubmitting}
          />

          {/* 3. Title Input */}
          <div>
            <label className="form-label">Title</label>
            <Input
              {...form.register("title")}
              placeholder="ex: Rich Dad Poor Dad"
              disabled={isSubmitting}
            />
            {form.formState.errors.title && (
              <div className="text-sm text-red-600 mt-2">
                {form.formState.errors.title.message}
              </div>
            )}
          </div>

          {/* 4. Author Input */}
          <div>
            <label className="form-label">Author Name</label>
            <Input
              {...form.register("author")}
              placeholder="ex: Robert Kiyosaki"
              disabled={isSubmitting}
            />
            {form.formState.errors.author && (
              <div className="text-sm text-red-600 mt-2">
                {form.formState.errors.author.message}
              </div>
            )}
          </div>

          {/* 5. Voice Selector */}
          <div>
            <label className="form-label">Choose Assistance Voice</label>
            <VoiceSelector
              value={form.watch("persona")}
              onChange={(value) => form.setValue("persona", value)}
              disabled={isSubmitting}
            />
            {form.formState.errors.persona && (
              <div className="text-sm text-red-600 mt-2">
                {form.formState.errors.persona.message}
              </div>
            )}
          </div>

          {/* 6. Submit Button */}
          <Button type="submit" className="form-btn" disabled={isSubmitting}>
            Begin Synthesis
          </Button>
        </form>
      </div>
    </>
  );
};

export default UploadForm;
